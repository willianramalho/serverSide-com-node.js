/*
Uma financeira usa o seguinte critério para conceder empréstimos: o valor total do 
empréstimo deve ser até dez vezes o valor da renda mensal do solicitante e o valor da 
prestação deve ser no máximo 30% da renda mensal do solicitante. Escreva um programa 
que leia a renda mensal de um solicitante, o valor total do empréstimo solicitado e o 
número de prestações que o solicitante deseja pagar e informe se o empréstimo pode ou 
não ser concedido
*/

const readline = require('readline').createInterface({
       input: process.stdin,
       output: process.stdout
    });
    
    readline.question('Qual é a sua renda mensal? ', (renda) => {
       const rendaMensal = parseInt(renda);
       console.log(`Sua renda mensal é de ${rendaMensal}`);
    
       const valorEmprestimo = readline.question('Qual é o valor do seu empréstimo desejado? ', (emprestimo) => {
           const valorEmprestimo = parseInt(emprestimo);
    
           const numPrestacoes = readline.question('Em quantas vezes você deseja pagar? ', (prestacoes) => {
               const numPrestacoes = parseInt(prestacoes);
    
               const maxValorEmprestimo = 10 * rendaMensal;
               const maxPrestacoes = 0.3 * rendaMensal;
    
               if (valorEmprestimo <= maxValorEmprestimo && (valorEmprestimo / numPrestacoes) <= maxPrestacoes) {
                   console.log('Empréstimo concedido');
               } else {
                   console.log('Empréstimo recusado');
               }
    
               readline.close();
           });
       });
    });