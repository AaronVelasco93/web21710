document.getElementById('operacionesForm').addEventListener('submit',function(event){
    event.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operador = document.getElementById('operador').value;
    let resultado;
    switch(operador){
        case 'sum':
            resultado=num1+num2;
            break;
        case 'rest':
            resultado= num1-num2;
            break;
        case 'mult':
            resultado=num1*num2;
            break;
        case 'div':
            if(num2!==0){
                resultado= num1/num2;

            }else{
                resultado="No se puede dividir entre 0";
            }
            break;
    }
    document.getElementById('resultado').innerHTML=`El resultado es: ${resultado}`;
});