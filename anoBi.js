/*
Chama-se ano bissexto o ano ao qual é acrescentado um dia extra, ficando ele com 366 
dias, um dia a mais do que a maioria dos anos com 365 dias, ocorrendo a cada quatro 
anos. Escreva um programa que verifique se um ano é bissexto. Um ano é bissexto se ele 
é divisível por 4. Entretanto, se o ano é divisível por 100, ele não é bissexto. Mas, se ele 
for divisível por 400, ele volta a ser bissexto. São bissextos os anos: 1600, 1996, 2000, 
2004, 2008, 2012, 2016, 2400, 2800, ... Não são bissextos: 1500, 1974, 1982, 1983, 1990, 
2018, 2022, 2030, 2038, ... Neste programa o usuário informa o ano e o programa exibe 
uma saída apontando se bissexto ou não
*/
const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question('Digite o ano: ', (ano) => {
 if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
   console.log(`${ano} é bissexto`);
 } else {
   console.log(`${ano} não é bissexto`);
 }
 rl.close();
});