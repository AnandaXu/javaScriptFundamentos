console.log(`trabalhando com listas`);
// const salvador = `salvador`;
// const saoPaulo =`são paulo`;
// const rioDeJaneiro = `rio de janeiro`;

const listaDeDestinos = new Array (
    `salvador`,
    `são paulo`,
    `rio de janeiro`

);

listaDeDestinos.push(`curitiba`); //adicionando um item na lista

console.log("destinos possiveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //eliminar um item da lista, lembrar que a lista sempre começa com 0, 1, 2. 
console.log(listaDeDestinos);
console.log(listaDeDestinos [1], listaDeDestinos[0]); //mostrar um unico elemento da minha lista