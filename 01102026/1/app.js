const usuarios=[];

const form=document.getElementById('userForm');
const salida =document.getElementById('salidaJSON');

// Evento al enviar el formulario
form.addEventListener('submit',function(event){
    event.preventDefault(); // Evita que se recargue la página
    
//    obtener los datos del formulario
    const nombre = document.getElementById('name').value; //aaron
    const correo = document.getElementById('email').value; //aaron@gmail.com

    // crear un onjeto usuario
    const usuario = {
        nombre: nombre,
        correo: correo
    };

    // agregar el usuario a la lista
    usuarios.push(usuario);

    // mostrar los usuarios en formato JSON
    salida.textContent = JSON.stringify(usuarios, null, 2);
    form.reset(); // Limpiar el formulario

});
