var opcionUser = prompt(`
    1.- Libro
    2.- Pelicula
    3.- Juego
    
    `);
    switch(opcionUser){

        case "1":
            console.log("El principe");
            break;
        case "2":
            console.log("Matrix");
            break;
        case "3":
            console.log("Maicra");
        break;
        default:
            console.log("Opcion no valida");
            break;
    }