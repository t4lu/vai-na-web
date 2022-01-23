/*
Bloco 2 - funções - 19.01.2022

1 - crie uma função que exiba uma mensagem no console
2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console */


// ====== EXERCÍCIO 1 ======
function exibirMensagem (){
    console.log('Sou a mensagem do primeiro exercício (:');
}
exibirMensagem();



// ====== EXERCÍCIO 2 ======
function exibirNome(meuNome){
    console.log('Olá! Meu nome é', meuNome, '(:');
}
exibirNome('Talita');



// ====== EXERCÍCIO 3 ======
function exibirSobreMim(meuNome, minhaIdade, estiloMusical){
    console.log('Meu nome é', meuNome);
    console.log('Tenho', minhaIdade, 'anos');
    console.log('Meu estilo musical favorito é o', estiloMusical);
}
exibirSobreMim('Talita', '25', 'R&B');



// ====== EXERCÍCIO 4 ======
function exibirGostos(filmeFavorito, musicaFavorita){
    console.log('Meu filme favorito é', filmeFavorito);
    console.log('No momento minha música favorita é', musicaFavorita,'♥')

}
exibirGostos('"Viva: A Vida É uma Festa"', '"Baby Powder"');