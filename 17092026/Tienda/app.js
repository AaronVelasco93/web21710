let inventario =[];
function mostrarMenu(){
    return parseInt(prompt(`
        Opciones disponibles
        1.- Agregar producto
        2.- Mostrar todos los productos
        3.- Buscar producto
        4.- Salir
        "Elige una opcion"
        
        `));
}
// Funcion para agregar un producto
function agregarProducto(){
    let nombre = prompt("Ingresa el nombre del producto:");
    let cantidad = parseInt(prompt("Ingresa cantidad:"));
    let precio= parseFloat(prompt("Ingresa precio:"));
    if(cantidad > 0 && precio >0){
        let producto={
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto se agrego de forma exitosa")
    }else{
        alert("Cantidad o precio deben ser numero positivos")
    }
}
function mostrarProducto(){
    if(inventario.length === 0){
        alert("No hay producto en el inventario");
    }else{
        let mensaje = "Productos de inventario \n";
        for(let i =0; i < inventario.length; i++){
            mensaje+= ` Producto: ${i+1}
                        Nombre: ${inventario[i].nombre}
                        Cantidad: ${inventario[i].cantidad}
                        Precio: ${inventario[i].precio}
                        ------------------------------
            `;
        }
        alert(mensaje);
    }
}
function buscarProducto(){
    let nombreBucar = prompt("Ingresa el nombre del producto a buscar:");
    let encontrado=false;
    for(let i = 0;i < inventario.length; i++ ){
        if(inventario[i].nombre.toLowerCase() === nombreBucar.toLowerCase()){
            alert(`
                    Producto econtrado
                    Nombre: ${inventario[i].nombre}
                    Cantidad: ${inventario[i].cantidad}
                    Precio: ${inventario[i].precio}
                `);
                encontrado = true;
                break;
        }
    }
    if(!encontrado){
        alert("Producto no econtrado.");
    }
}
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1: 
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opcion no valida")

        }
    }
}
iniciarPrograma();
