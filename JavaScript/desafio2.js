//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let idade = 5

console.log('====== EXERCÍCIO 1 ======')

if (idade > 18) {
    console.log('Você pode fazer tatuagem. Escolha bem! ;D')
} else {
    console.log('Você é menor de idade,\nnão pode fazer tatuagem :(')
}

console.log('\n====== EXERCÍCIO 2 ======')

let humano = true 

if (idade > 18 && humano){
    console.log('VOTE 13')
} else {
    console.log('Não esqueça de fazer o título de eleitor.')
}

console.log('\n====== EXERCÍCIO 3 ======')

let anivJan = false;
let anivDez = true;

if (anivJan || anivDez == true){
    console.log('Você é aniversariante do mês, parabéns!')
} else {
    console.log('Apenas mais um mês de luta, né?!')
}