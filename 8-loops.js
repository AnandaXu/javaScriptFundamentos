console.log(` \n trabalhando com condicionais`);

const listaDeDestinos = new Array (
    `salvador`,
    `são paulo`,
    `rio de janeiro`

);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "rio de janeiro";

console.log("\n destinos possiveis");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos [contador] == destino){
        console.log("destino existe");
        destinoExiste = true;
        break;
    } 

    contador += 1;
}

console.log("destino existe", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem!")
} else {
    console.log("desculpe o transtorno")
}
  

// for ( let cont = 0; cont < 3 ; cont ++) {
//     if (listaDeDestinos [contador] == destino){
//         console.log("destino existe");
//         destinoExiste = true;
//         break;
//     } 


// }


// for(let i = 0 ; i <3 ; i++){
//     if(listaDeDestinos[contador] == destino){
//         destinoExiste = true;
//         }
// }
  
  

  