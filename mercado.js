/*
O Hipermercado Tabajara está com uma promoção de carnes. Confira (1,0):
 Tipo Até 5 Kg Acima de 5 Kg
File Duplo R$ 24,90 por Kg R$ 25,80 por Kg
Alcatra R$ 25,90 por Kg R$ 26,80 por Kg
Picanha R$ 36,90 por Kg R$ 37,80 por Kg
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne 
da promoção, porém não há limites para a quantidade de carne por cliente. 
Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre 
o total da compra. Escreva um programa que peça o tipo e a quantidade de carne 
comprada pelo cliente e se pagamento será com o cartão Tabajara ou não. Em seguida, 
gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, 
preço total, tipo de pagamento, valor do desconto e valor a pagar.
*/

const readline = require('readline');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hipermercado'
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const carnes = {};

connection.query('SELECT * FROM carnes', (error, results) => {
  if (error) throw error;

  results.forEach(result => {
    carnes[result.tipo] = {
      preco_ate_5kg: result.preco_ate_5kg,
      preco_acima_5kg: result.preco_acima_5kg
    };
  });

  rl.question('Qual o tipo de carne desejado? (file duplo, alcatra ou picanha) ', tipo => {
    tipo = tipo.toLowerCase();

    if (!carnes.hasOwnProperty(tipo)) {
      console.log('Tipo de carne inválido!');
      rl.close();
      return;
    }

    rl.question('Qual a quantidade desejada (em kg)? ', quantidade => {
      quantidade = parseFloat(quantidade);

      if (isNaN(quantidade) || quantidade <= 0) {
        console.log('Quantidade inválida!');
        rl.close();
        return;
      }

      rl.question('Pagamento com cartão Tabajara? (s/n) ', resposta => {
        let cartao = resposta.toLowerCase() === 's';
        let preco;

        if (quantidade <= 5) {
          preco = carnes[tipo].preco_ate_5kg * quantidade;
        } else {
          preco = carnes[tipo].preco_acima_5kg * quantidade;
        }

        let desconto = 0;

        if (cartao) {
          desconto = preco * 0.05;
        }

        let precoFinal = preco - desconto;

        console.log(`Cupom fiscal:
Tipo de carne: ${tipo}
Quantidade: ${quantidade.toFixed(2)} Kg
Preço total: R$ ${preco.toFixed(2)}
Tipo de pagamento: ${cartao ? 'Cartão Tabajara' : 'Outros cartões'}
Valor do desconto: R$ ${desconto.toFixed(2)}
Valor a pagar: R$ ${precoFinal.toFixed(2)}`);

        connection.query('INSERT INTO vendas (tipo, quantidade, cartao, preco_total) VALUES (?, ?, ?, ?)', [tipo, quantidade, cartao, precoFinal], error => {
          if (error) throw error;

          rl.close();
        });
      });
    });
  });
});
