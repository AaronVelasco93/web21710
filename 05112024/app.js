const operacinPromesa = (numero1, numero2) =>{
    const resultado = numero1+numero2;
    return new Promise ( resolve =>{
        setTimeout(()=>{
            resolve(resultado)
        },300);
    });
}
operacinPromesa(1,3)
    .then(reult => console.log(reult) );