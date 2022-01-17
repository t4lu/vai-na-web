//Bloco 2 - 12.01.2022

//Crie uma variável que receba um nome
// Crie uma variável que receba um número;
// Crie uma variável com o ano atual e subtraia pelo número que você guardou;
// Agora mostre no console o resultado da soma das duas variáveis guardadas anteriormente;
//Mostre no console a mensagem "Estou mexendo no console.log"
// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console;

// Exiba no console o tipo de dado da váriavel quartaFeira;


let nome = "Talita Santos";
let numero = 100;
let anoAtual = 2022;
let subtracao = anoAtual - numero;
let soma = numero + anoAtual;

console.log('====== EXERCÍCIO 1 ======')
console.log('Variável com nome:', nome);
console.log('Variável com número:', numero);
console.log('Ano atual:', anoAtual);
console.log('Resultado da subtração:', subtracao);
console.log('Resultado da soma:', soma)
console.log("Estou mexendo no console.log");


console.log('\n====== EXERCÍCIO 2 ======')
let quartaFeira = true;
console.log('Hoje é quarta-feira?', quartaFeira);
console.log('Essa variável e do tipo', typeof(quartaFeira));