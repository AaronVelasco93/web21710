let compras = [];
let fruta = prompt("Ingresa un fruta");

compras.push(fruta);
while( confirm("Ingresa una fruta a el carrtio:")){
    let fruta2 = prompt("Ingresa otra fruta: ");
    compras.push(fruta2);
}
console.log("Las frutas que compras son: ");

for ( let valoresDeArreglo of compras){
    console.log(valoresDeArreglo);

}
