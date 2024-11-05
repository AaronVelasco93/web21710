const operacionCallback = (numero1, numero2,callback)=>{
    return setTimeout(()=>{
        callback(numero1,numero2)
    },300);
}

operacionCallback (1,3,(a,b)=>{
    console.log(a+b);    
});
