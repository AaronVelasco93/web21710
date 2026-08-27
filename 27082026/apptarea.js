var usuario=  parseInt( prompt(`
    ---Selecciona un dia de la semana con numero----
     1.- Lunes
     2.- Martes
     3.- Miercoles
     4.- Jueves
     5.- Viernes
     6.- Sabado
     7.- Domingo   
    `));
switch(usuario){
    case 1:
        console.log("Estudiar");
        break;
    case 2:
        console.log("Leer");
        break;
    case 3:
        console.log("Salir con mama");
        break; 
    case 4:
        console.log("Ir por las promos");
        break;
    case 5:
        console.log("Tomar suerito");
        break;
    case 6:
        console.log("Comer con familia");
        break;
    case 7:
        console.log("Ir a misa");
        break;
    default:
        console.log("no valido");
        break;        
}