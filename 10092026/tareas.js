let tareas=[];
// funcion para menu
function mostrarMenu(){
    return parseInt(prompt(`
            Opciones diponibles
            1.- Agregar tarea
            2.- Ver todas las tareas
            3.- Marcar tarea como completada
            4.- Salir 
            "Elige un opcione:"
        
        `));
}

function agregarTarea(){
    let nombreTarea=prompt("Ingresa nombre de tarea");
    if(nombreTarea){
        let tarea={
            nombre: nombreTarea,
            completada: false 
        };
        tareas.push(tarea);

    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }

}

function verTarea(){
    if( tareas.length === 0 ){
        alert("No tenemos tareas");
    }else{
        let mensaje= "Lista tareas:";
        tareas.forEach((tarea, index)=>{
            mensaje+=`${index+1} .- ${tarea.nombre} [${tarea.completada ? "Completada" : "Pendiete"}]\n`;
            // 1 .- Estudiar [Pendiente]
        });
        alert(mensaje);
    }
}
function marcarTareaCompletada(){
    let numero = parseInt(prompt("Que tarea quieres marcar como completada"));
    if( numero > 0 && numero <= tareas.length  ){
        tareas[numero-1].completada = true;
        alert(`La tarea: ${tareas[numero-1].nombre} se marco como completada`);
      
    }else{
        alert("Numero de tarea invalido");
    }
}
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let option = mostrarMenu();
        switch(option){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opcion no valida");

        }
    }
    alert("Programa finalizado");
}
iniciarPrograma();