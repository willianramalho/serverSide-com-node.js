/*
Em uma certificação são feitos 5 exames (I, II, III, IV e V). Escreva um programa que leia 
as notas destes exames e imprima a classificação do interessado na certificação, sabendo 
que a média é 7,0. Classificação: A – passou em todos os exames; B – passou em I, II e 
IV, mas não em III ou V; C – passou em I e II, III ou IV, mas não em V. Reprovado – outras 
situações. O programa deverá exibir o nome do interessado(a) e a respectiva classificação
*/

const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
    });
    
    readline.question('Qual é o seu nome? ', (nome) => {
     readline.question('Digite a nota do exame I: ', (notaI) => {
       readline.question('Digite a nota do exame II: ', (notaII) => {
         readline.question('Digite a nota do exame III: ', (notaIII) => {
           readline.question('Digite a nota do exame IV: ', (notaIV) => {
             readline.question('Digite a nota do exame V: ', (notaV) => {
               const media = (parseFloat(notaI) + parseFloat(notaII) + parseFloat(notaIII) + parseFloat(notaIV) + parseFloat(notaV)) / 5;
               let classificacao = '';
    
               if (media >= 7) {
                 classificacao = 'A - passou em todos os exames';
               } else if ((parseFloat(notaI) >= 7) && (parseFloat(notaII) >= 7) && (parseFloat(notaIV) >= 7) && ((parseFloat(notaIII) < 7) || (parseFloat(notaV) < 7))) {
                 classificacao = 'B - passou em I, II e IV, mas não em III ou V';
               } else if ((parseFloat(notaI) >= 7) && (parseFloat(notaII) >= 7) && ((parseFloat(notaIII) >= 7) || (parseFloat(notaIV) >= 7)) && (parseFloat(notaV) < 7)) {
                 classificacao = 'C - passou em I e II, III ou IV, mas não em V';
               } else {
                 classificacao = 'Reprovado';
               }
    
               console.log(`${nome}, sua média foi de ${media.toFixed(2)}. Sua classificação é ${classificacao}.`);
    
               readline.close();
             });
           });
         });
       });
     });
    });