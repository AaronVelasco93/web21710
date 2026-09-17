//arreglo vacios
let nombres=[];

// Funcion para agregar nombres
function agregarNombre(){
    let nombre= prompt("Ingresa un numbre");
    if(nombre){
        nombres.push(nombre);
        alert(`Nombre ${nombre} se ingres de forma correcta`);
    }else{
        alert("El nombre no puede estar vacio");
    }
}
// Funcion para agregar nombres
function mostrarNombres(){
    if(nombres.length === 0){
        alert("No tenemos nombres cargados")
    }else{
        let mensaje="Nombre almacenados\n";
        nombres.forEach((nombre,index)=>{
            mensaje+=`${index+1}.- ${nombre}\n`;
        });
        alert(mensaje);
    }
}
// mostrar menu
function mostrarMenu(){
    let opcion;
    do{ 
        opcion=prompt`
            Opciones disponibles
            1.- Agregar nombre
            2.- Mostrar Nombre
            3.- Salir
            Elige una opcion :3
        `;
        switch(opcion){
            case '1':
                agregarNombre();
                break;
            case '2':
                mostrarNombres();
                break;
            case '3':
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion invalida");
        }

    }while(opcion !== '3');
}
//iniciar programa
mostrarMenu();