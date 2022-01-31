/*
Bloco 2 - arrays e objeto - 26.01.2022

1- Crie um objeto que receba ao menos três propriedades sobre você.

2- Adicione uma nova propriedade sem alterar seu objeto inicial.

3- Remova uma propriedade desse objeto.

4- Mostre no console todas as propriedades desse objeto.

5- 
a) Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
b) Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
c) Na propriedade amigos, adicione ao menos 4 itens. 
d) Mostre no console o nome de um amigo de cada lista.

*/

// ====== EXERCÍCIO 1 ======

let sobreMim = {
    nome: "Talita",
    apelido: "Talu",
    corFavorita: "Roxo"
}
console.log("\n======== EXERCÍCIO 1 ========");
console.log("Alguns fatos sobre mim:", sobreMim);

// ====== EXERCÍCIO 2 ======

sobreMim.artistaFavorito = "Bruno Mars";

console.log("\n======== EXERCÍCIO 2 ========");
console.log("Alguns fatos sobre mim:", sobreMim);

// ====== EXERCÍCIO 3 ======

delete sobreMim.nome;
console.log("\n======== EXERCÍCIO 3 ========");
console.log("Alguns fatos sobre mim:", sobreMim);

// ====== EXERCÍCIO 4 ======

let sobreMim2 = {
    nome: "Talita",
    apelido: "Talu",
    corFavorita: "Roxo",
    artistaFavorito: "Bruno Mars"
}

console.log("\n======== EXERCÍCIO 4 ========");
console.log("Alguns fatos sobre mim:", sobreMim2);

// ====== EXERCÍCIO 5 ======

let cadastro = ["Ana", "Juliana", "Mariana", "Poliana", "Joseana"];

console.log("\n======== EXERCÍCIO 5 ========");
console.log("\na) Cadastro:", cadastro);

console.log("\nb) Inserindo propriedades:");

let pessoa1 = {
    nome: "Ana",
    idade: 12,
    telefone: 12345678,
    amigos: ["Enzo", "Valentina", "Clara", "Pedro"]
}

console.log(pessoa1);

let pessoa2 = {
    nome: "Juliana",
    idade: 13,
    telefone: 12345678,
    amigos: ["Carlos", "João", "David", "Pietro"]
}

console.log(pessoa2);

let pessoa3 = {
    nome: "Mariana",
    idade: 12,
    telefone: 12345678,
    amigos: ["Maria", "Julia", "Ana", "Vitoria"]
}

console.log(pessoa3);


let pessoa4 = {
    nome: "Poliana",
    idade: 11,
    telefone: 12345678,
    amigos: ["Anderson", "Bruno", "Leonardo", "Daniel"]
}

console.log(pessoa4);

let pessoa5 = {
    nome: "Joseana",
    idade: 12,
    telefone: 12345678,
    amigos: ["Pierre", "Marie", "Paul", "Danilo"]
}

console.log(pessoa5);

console.log("\nc) Um(a) amigo(a) da lista de cada pessoa:");

//d)
console.log("Ana:", pessoa1.amigos[0]);
console.log("Juliana:", pessoa2.amigos[1]);
console.log("Mariana:", pessoa3.amigos[0]);
console.log("Poliana:", pessoa4.amigos[3]);
console.log("Joseana:", pessoa5.amigos[2]);