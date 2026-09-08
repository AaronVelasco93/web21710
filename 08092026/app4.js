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
    universidadAcciones: function (){
        console.log("Ir a clase");
    },
    universidadAciones2(){
        console.log("Comer con los panas");
    },
    irClase(nombreDeClase){
        return `Tomando clase de ${nombreDeClase}`;
    },
    irLaboratorio(nombreLaboratorio){
        return `${this.nombre} va a el laboratorio de ${nombreLaboratorio}`;
    }

}
estudiante.universidadAcciones();
estudiante.universidadAciones2();
var accion =estudiante.irClase("Programacion Web 2");
console.log(accion);


var accion = estudiante.irLaboratorio("Micros");
console.log(accion);