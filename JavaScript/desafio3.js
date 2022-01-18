//Bloco 2 - Laços de repetição while e for - 17.01.2022

//1 - Criar um loop que conte de 10 até 1 usando WHILE

//2 - Criar um loop que conte todos os números ímpares de 1 até 100

//3- Criar um loop que conte todos os números pares de 0 a 100


console.log('====== EXERCÍCIO 1 ======')
console.log('\na) Contagem decrescente com laço "while": ')

let contagem = 10;

while (contagem >=1 && contagem <= 10) {
    console.log(contagem);
    contagem--;
}

console.log('\nb) Contagem decrescente com laço "for": ')

for (let contador = 10; contador >=1 && contador <=10; contador--){
    console.log(contador);
}

console.log('\n====== EXERCÍCIO 2 ======')
console.log('\na) Números ímpares de 1 a 100 com laço "while": ')

let numImpares = 1;

while (numImpares >= 1 && numImpares < 99){
    numImpares += 2;
    console.log(numImpares);
}

console.log('\nb) Números ímpares de 1 a 100 com laço "for": ')
for (let impares = 1; impares <= 100; impares += 2) {
    console.log(impares);
}


console.log('\n====== EXERCÍCIO 3 ======')
console.log('\na) Números pares de 1 a 100 com laço "while": ')

let numPares = 0;

while (numPares >= 0 && numPares < 100){
    numPares += 2;
    console.log(numPares);
}

console.log('\nb) Números pares de 1 a 100 com laço "for": ')
for (let pares = 0; pares <= 100; pares += 2) {
    console.log(pares);
}
