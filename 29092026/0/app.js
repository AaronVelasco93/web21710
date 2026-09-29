// Obtener elmetos del DOM
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const nombre = document.getElementById("nombre");
const lista = document.getElementById("lista");

// cambiar el contenido del elmento
document.getElementById('btnTitulo').addEventListener("click",function(){
    titulo.textContent="Este es un mensaje modificado por medio de JS";
});
// Cambiar estilos con JS
document.getElementById('btnColor').addEventListener("click",function(){
    mensaje.style.color="blue";
    mensaje.style.fontSize="45px";
    mensaje.style.fontWeight="bold";
});
// Leer datos de input
document.getElementById('btnMostrar').addEventListener("click",function(){
    const textNombre=nombre.value;
    // modificamos el contenido
    mensaje.textContent = "Hola como estas: " + textNombre;
});

// crear un elemento html
document.getElementById('btnAgregar').addEventListener("click",function(){
    // agregar contenido al nuevo elemento
    const nuevoElemento = document.createElement("li");
    // agregamos el elemento
    nuevoElemento.textContent="Nuevo elemento agregado desde JS";
    lista.appendChild(nuevoElemento);
});


// eliminar elementos
document.getElementById('btnEliminar').addEventListener("click",function(){
    const ultimo = lista.lastElementChild;
    if(ultimo){
        ultimo.remove();
    }else{
        alert("Sin elementos");
    }
});