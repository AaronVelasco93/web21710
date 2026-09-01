let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
// Math.floor(Math.random() * (max - min)) + min;
console.log(numeroMaquina);

let numeroUsuario = parseInt(prompt("Adivina el número del 1 al 10"));

let vidas = 3;
    //   true                                 true 
    //   true
 while( numeroUsuario !== numeroMaquina && vidas > 1){
    vidas--;
    numeroUsuario= parseInt(prompt("Número incorrecto, te quedan " + vidas + " vidas. Intenta de nuevo:"));
 }
if(numeroUsuario === numeroMaquina){
    alert("¡Felicidades! Adivinaste el número.");
}else{
    alert("Lo siento, has perdido. El número correcto era " + numeroMaquina);
}