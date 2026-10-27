const tabla = document.getElementById('tabla');
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');

// dos banderas para saber si si esta editando y el ID del usuario
let editando = false;
let usuarioId = null;

form.addEventListener('submit',async e =>{
    e.preventDefault();

    // Objeto donde esta el nombre y correo
    const datos ={
        nombre: nombre.value,
        correo: correo.value
    };
    if(editando){
        //Si estamos en modo edicion: aztualizar (PUT)
        await fetch(`/api/usuarios/${usuarioId}`,{
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(datos)
        });
        editando = false;
        usuarioId= null;
        document.getElementById('btnGuardar').textContent = 'Agregar';
    }else{
        //Si no estamos editando: agregaremos un nuevo usuario (POST)
        await fetch('/api/usuarios',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        });
    }
    form.reset();
    cargar();
});