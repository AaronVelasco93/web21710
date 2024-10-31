const miPromesa = new Promise((resolve, reject)=>{
    //Simulamos una operacion asincrona
    setTimeout(()=>{
        const exito = true;
        if(exito){
            resolve("Operacion exitosa");
        }else{
            reject("Hubo un error en la operacion")
        }
    },300);
});