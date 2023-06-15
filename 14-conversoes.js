// tipo de dados 
// booleanos

//conversao implicita; === comparação direta, == ele converte ambos em texto e vai dar true

const numero = 456;
const numeroString = "456";

console.log( numero == numeroString);

//função Number () isso pode ser passado dentro da variavel, sempre fechando o numero com parenteses
// função String ()

console.log( numero + Number (numeroString));


const idadeMinima = 18;
const idadeCliente = 16;

if ( idadeCliente >= idadeMinima){
    console.log ("cerveja")
} else {
    console.log("suco")
};

console.log( idadeCliente >= idadeMinima ? "cerveja" : "suco");


//  RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. 
//  Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, 
// como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, 
// mas também pode indicar um erro no programa.

//  SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não 
// consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, 
// por exemplo, operadores ou sinais gráficos com elementos a menos, 
// como esquecer de fechar chaves ou colchetes.

 // TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de 
// texto, mas recebeu outro, como um número, booleano ou null.



// ||: Operador “ou”, retorna true caso uma condição seja válida;
// &&: Operador “e”, retorna true somente se todas as condições forem válidas;
// != e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, 
// da mesma forma que == e === retornam true ou false.