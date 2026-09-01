// Ejemplo de bucles en JavaScript
//.             0.        1.         2.       3.          4
let frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Uva"];
/*
console.log(frutas);
console.log("La longitud del array es: " + frutas.length);
console.log(frutas[0]);
*/

// for (let i = 1; i <= 10; i++) {
//     console.log("3 x " + i + " = " + (3 * i));
// }
for (let i = 0; i < frutas.length; i++) {
    // console.log("Fruta " + (i + 1) + ": " + frutas[i]);
    console.log("la fruta es: "+(i+1)+":" + frutas[i]);
}