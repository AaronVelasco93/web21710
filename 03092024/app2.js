function sumar (n1, n2){
    return parseInt(n1)+parseInt(n2);
}

let numeroUno = prompt("Ingresa un numero: ");
let numeroDos = prompt("Ingresa un numero: ");

let resultado = sumar(numeroUno,numeroDos);
console.log("Total es: "+resultado); 