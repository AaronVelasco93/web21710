function agregarPantalla(value) {
    document.getElementById("pantalla").value += value;
}
function borrarPantalla() {
    document.getElementById("pantalla").value = "";
}
function calcular() {
    try {
        let resultado = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = resultado;
    }catch (error) {
        document.getElementById("pantalla").value = "Error";
    }
}