/*
Bloco 2 - arrays - 24.01.2022

1- Crie um array que receba 5 itens e exiba no console.

2- Utilize um método para adicionar um nome ao inicio do array.

3- Utilize um método para remover o último nome do array.

4- Utilize um método para adicionar dois nomes ao fim do array.

5- Utilize um método para remover o primeiro nome do array.

6- Utilize um método para organizar em ordem crescente o seguinte array: 
const numbers = [7,5,6,3,8,9,2,1,4] 
*/


// ====== EXERCÍCIO 1 ======

let listaDeArtistas = ["Aminé", "Anderson .Paak", "Cardi B", "Chloe Bailey", "Megan Thee Stallion"];

console.log("\n======== EXERCÍCIO 1 ========");
console.log("Artistas favoritos do momento:", listaDeArtistas);

// ====== EXERCÍCIO 2 ======
listaDeArtistas.unshift("Doja Cat");

console.log("\n======== EXERCÍCIO 2 ========");
console.log("Lista atualizada:", listaDeArtistas);

// ====== EXERCÍCIO 3 ======

listaDeArtistas.pop();
console.log("\n======== EXERCÍCIO 3 ========");
console.log("Removendo a última artista:", listaDeArtistas);

// ====== EXERCÍCIO 4 ======

listaDeArtistas.push("Kendrick Lamar", "Big Sean");
console.log("\n======== EXERCÍCIO 4 ========");
console.log("Adicionando dois artistas ao final da lista:", listaDeArtistas);

// ====== EXERCÍCIO 5 ======

listaDeArtistas.shift();
console.log("\n======== EXERCÍCIO 5 ========");
console.log("Removendo a primeira artista:", listaDeArtistas);

// ====== EXERCÍCIO 6 ======

const numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log("\n======== EXERCÍCIO 6 ========");
console.log("Números em ordem crescente:", numbers)