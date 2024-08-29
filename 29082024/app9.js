saludar();
function saludar(){
    console.log("Hola");
    alert("Hola desde un alert");
}

function despedida(nombreUsuario){
    console.log("Adios: "+nombreUsuario);
}
despedida("Aaron");

function retorno(nombreUsuario){
   return "Adios con un return"+nombreUsuario; 

}
console.log(retorno("Aaron"));

