const miPromesa = new Promise ((resolve, reject)=>{
    //simulacion de una operacion asincrona
    const exito= true;
    setTimeout(()=>{
    if(exito){
        resolve(console.log("exito"));
    }else{
        reject("Tenemos un error");
    }
    },1000);
});

/*
function saludar, despedida (){
    console.log("Hola mundo");
}*/