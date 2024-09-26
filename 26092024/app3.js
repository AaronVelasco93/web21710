//Declarativa
/*
function numeroAleatorio(min,max){
    return Math.floor( Math.random()* (max-min)+min);
} 
console.log(numeroAleatorio(5,15));
*/
//Expresada en una variable
/*
let calculaAleatorio= function numeroAleatorio(min,max){
    return Math.floor( Math.random()* (max-min)+min);
};

console.log(calculaAleatorio(1,11));
*/
/*
let calculaAleatorio= function numeroAleatorio(min,max){
    return Math.floor( Math.random()* (max-min)+min);
};
*/
//let numero=(max,min) =>{ return Math.floor( Math.random()* (max-min)+min)};

let numero=(max,min) => Math.floor( Math.random()* (max-min)+min);

console.log(numero(15,1));