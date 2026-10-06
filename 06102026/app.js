let usuarios = [];

const form = document.getElementById('formUser');
const tabla = document.getElementById('tablaUsuarios');
const inputArchivo = document.getElementById('importarJSON');
const btnDescargar = document.getElementById('descargar');

function generarID(){
    //.       condiciion       ?  verdadero                           : falso; 
    return usuarios.length > 0 ? Math.max(...usuarios.map(u=>u.id))+1 : 1;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // Obtener valores del Form
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

    const usuario={
        id: generarID(),
        nombre: nombre,
        correo: correo
    };
    usuarios.push(usuario);
    mostrarUsuarios();
    form.reset();
});

function mostrarUsuarios(){
    tabla.innerHTML='';
    usuarios.forEach((user,index)=>{
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>${user.id}</td>
            <td contenteditable onblur="editarCampo(${index},'nombre',this.textContent)" >${user.nombre}</td>
            <td contenteditable onblur="editarCampo(${index},'correo',this.textContent)">${user.correo}</td>
            <td><button onclick="eliminarUsuario(${index})" >Eliminar</button></td>
        `;
        tabla.appendChild(row);

    }); 
}

// Funcion para editar Arreglo
function editarCampo(index,campo,valor){
    usuarios[index][campo] = valor.trim();
}

function eliminarUsuario(index){
    if(confirm("Seguro que quires eliminar el campo ?")){
        usuarios.splice(index,1);
        mostrarUsuarios();
    }
}

// descargar JSON
btnDescargar.addEventListener('click',function(){
    const blob = new Blob([JSON.stringify(usuarios,null,2)],{type: "aplication/json"});
    // genear URL temporal
    const url = URL.createObjectURL(blob);

    // crear el elemento de ancla invisible para simular la descarga
    const a = document.createElement('a');
    a.href=url;
    a.download='usuarios_actualizados.json';
    a.click();
    // liberar la URL temporal
    URL.revokeObjectURL(url);

});