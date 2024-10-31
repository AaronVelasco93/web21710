//Esta es una funcion callback
//no usar la palbra callback es una mala practica de programacion
/*
const operacion =(numero1, numero2,op)=>{
    return console.log(op(numero1,numero2));
}
operacion (1,3,(a,b)=>a+b);
operacion (1,3,(a,b)=>a/b);
operacion (1,3,(a,b)=>a-b);
operacion (1,3,(a,b)=>a*b);
*/

//Buena pratica de programacion
/*
const operacion = (numero1, numero2,callback)=>{
    return console.log(callback(numero1,numero2));
}
operacion (1,3,
    (a,b)=>{
        a+b
    });

function saludo(){
    console.log("Hola mundo");
}
saludo();
*/
//Ejemplo


function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function procesarEntradaUsuario(callback){
    const nombre = prompt("Por favor, ingresa tu nombre");
        callback(nombre);
}

procesarEntradaUsuario(saludar);