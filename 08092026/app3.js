const estudiante={
    nombre: 'Aaron',
    primeroApellido:'Velasco',
    segundoApellido:'Agustin',
    RFC: "SDFGHJK67657",
    numeroCuenta:'4132345',
    caracteristicaCarrera:["1279","9","SS","Idioma","100% Creditos"],
    direccion:{
        calle:"Tulipan",
        numero:45,
        barrio:'Nuevo Leon',
        alcaldia:'Xochimilco',
        CP:16089,
        colindantes:{
            norte:"Casa 15",
            sur:"Tienda abarrotes",
            este:"cultivos"
        }

    },
}
console.log(estudiante.direccion.barrio);
console.log(estudiante.direccion.colindantes.norte);
// Saber si esta una propiedad en el objeto
console.log(estudiante.hasOwnProperty('RFC'));
console.log(estudiante.hasOwnProperty('CURP'));

/*
console.log(estudiante);
console.log(estudiante.RFC);
console.log(estudiante.caracteristicaCarrera[2]);
console.log(estudiante['nombre']);
console.log(estudiante['caracteristicaCarrera'][4]);
*/



