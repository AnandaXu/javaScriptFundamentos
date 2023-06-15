console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array (
    `salvador`,
    `são paulo`,
    `rio de janeiro`

);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("destinos possiveis");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idadade");
//   listaDeDestinos.splice(1, 1); // removendo item

// }   else if (estaAcompanhada == true) {
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1); //removedo item
// }else {
//   console.log("Não é maior de idade e não posso vender");
// }


if ( idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("BOA VIAGEM!!!");
  listaDeDestinos.splice(2, 1); // removendo item
  
}  else {
  console.log("Não é maior de idade e não posso vender");
}

console.log("embarque \n \n");

if(( idadeComprador >= 18 || estaAcompanhada == true) && (temPassagemComprada)) {
  console.log("boa viagem");
} else {
  console.log("não pode embarcar")
}


console.log(listaDeDestinos);









