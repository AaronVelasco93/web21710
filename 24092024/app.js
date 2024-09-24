let tienda = ["manzana","sandia","pera","jicama"];
//tienda.forEach(fruta => console.log(fruta));


tienda.forEach((fruta,index,array)=>{
    console.log(index+1);
    //console.log(array);
    console.log(fruta);
});

/*
tienda.forEach((fruta,index)=>{
    console.log(`Fruta (${index+1}).- ${fruta}`)
});
*/

tienda.forEach((mesa,correr)=>{
    console.log(`Fruta (${correr+1}).- ${mesa}`)
});

