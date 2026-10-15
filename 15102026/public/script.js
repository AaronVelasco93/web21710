const tabla = document.getElementById('tabla'); //tbody
const form = document.getElementById('formulario'); //formulario general
const nombre = document.getElementById('nombre');//nombre del input del form
const correo = document.getElementById('correo');//correo del input del form

// control de estado para la edicion de datos
let editando = false; //inidica si estamos editando
let usuarioId = null; //ID del usuario a editar

//Mostrar usuario en tabla 
async function cargarUsuarios() {
    const res = await fetch('/api/usuarios');
    const datos = await res.json();

    tabla.innerHTML='';
    
    datos.forEach(u=>{
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${u.id}</td>
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>
            <button onclick="llenarFormulario(${u.id},${u.nombre},${u.correo})" >Editar</button>
            <button onclick="eliminar(${u.id})" >Eliminar</button>    
        </td>
        `;

        tabla.appendChild(row);
    });
}
//rellenar el formulario para editar;
function llenarFormulario(id, nombreValor, correoValor){
nombre.value=nombreValor;
correo.value=correoValor;
usuarioId = id;
editando=true;
document.querySelector('button[type="submit"]').textContent='Actualizar';
}

//eventos para agregar o actualizar el usuario 
form.addEventListener('submit',async e =>{
    e.preventDefault();
    const datos={
        nombre: nombre.value,
        corre: correo.value
    };
    if(editando){
        //actualizar
        await fetch('/api/usuarios/'+usuarioId,{
           method: 'PUT',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(datos) 
        });
        editando= false;
        usuarioId=null;
        document.querySelector('button[type="submit"]').textContent='Agregar';
    }

});
