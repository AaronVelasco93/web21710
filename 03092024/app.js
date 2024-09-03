//Inicio de una arreglo para el almacen de tareas
let tareas=[];

//Funcion para mostrar nuestro menu
function mostrarMenu(){
    return parseInt(prompt(`
            "Opciones disponibles"
            1.- Agregar tarea
            2.- Ver todas la tareas
            3.- Marcar mi tarea como completada
            4.- Salir
            "Elige una opcion:"
        `));
}

//Funcion para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3: 
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta nuevamente");

        }

    }
    alert("Programa Finalizado");
}