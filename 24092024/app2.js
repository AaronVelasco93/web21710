let carrito=[];
let fruta = prompt("Ingresa una fruta");
carrito.push(fruta);

while( confirm("Deseas agregar otra fruta?")){
    let fruta = prompt("Ingresa una fruta");
    carrito.push(fruta);
};

let alerta = "Usted Compró: \n";
carrito.forEach((frutas,index) => {
    alerta += `${index +1}.- ${frutas} \n`;
});
alert(alerta);
