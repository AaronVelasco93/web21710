let frutas = ["manzana","pera","uva","platano","fresa","naranja"];
/*
for (const fruta in frutas) {
    console.log(fruta)
    
}

for (const fruta of frutas) {
    console.log(fruta)
    
}
    */
/*
frutas.forEach((fruta,incideFruta,arregloCompleto)=>{
    // console.log(fruta);
    //console.log(incideFruta);
    //console.log(arregloCompleto);
    console.log(`La fruta ${incideFruta+1} es ${fruta}`);
});
*/
const carrito =[];
const fruta = prompt("Ingresda una fruta");
carrito.push(fruta);
while( confirm("¿Quires agregar otra fruta?") ){
    const fruta = prompt("Ingresa otra fruta");
    carrito.push(fruta);
}
console.log("Usted compro");
carrito.forEach((fruta,indice)=>{
    console.log(`${indice+1} .- ${fruta}`);
});