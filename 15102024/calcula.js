function agregarPantalla( value){
    document.getElementById("pantalla").value+=value;
}

function limparPantalla(){
    document.getElementById("pantalla").value="";
}

function  calcular(){
    try {
        
        let valor = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = valor;
    } catch (error) {
        document.getElementById("pantalla").value="Error";  

    }
}
