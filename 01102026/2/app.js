// referencia de formulario y salida de JSON y boton de descarga
const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');
const downloadBtn = document.getElementById('descargarBtn');

//iniciar el arreglo de usuarios desde el localStorage o 
// crear uno nuevo si no existe
// localstorage.getItem('usuarios') obtiene el valor de la clave 'usuarios' en el localStorage
// JSON.parse() convierte la cadena JSON en un objeto JavaScript
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

mostrarUsuarios();

// evento para enviar al formulario
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // obtener los datos del formulario
    const nombre = document.getElementById('name').value;
    const correo = document.getElementById('email').value;

    // crear un objeto usuario
    const usuario = {
        nombre: nombre,
        correo: correo
    };
    
    // agregar el usuario a la lista
    usuarios.push(usuario);

    // guardar la lista de usuarios en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // mostrar los usuarios en formato JSON
    mostrarUsuarios();

    // limpiar el formulario
    form.reset();
});

// funcion para mostrar los usuarios en formato JSON en etiqueta <pre>
function mostrarUsuarios() {
    salida.textContent = JSON.stringify(usuarios, null, 2);
}

// evento de click para descargar el archivo JSON
downloadBtn.addEventListener('click', function () {
    const contenidoJSON = JSON.stringify(usuarios, null, 2);
    // crear un objeto Blob con el contenido JSON
    const blob = new Blob([contenidoJSON], { type: 'application/json' });
    // crear un enlace temporal para descargar el archivo
    const url = URL.createObjectURL(blob);
    
    // crear un enlace temporal para descargar el archivo <a>
    const a = document.createElement('a');
    a.href = url;

    a.download = 'usuarios.json'; //nombre del archivo a descargar
    a.click(); // simular un click en el enlace para iniciar la descarga
    // buena practica: liberar el objeto URL creado
    URL.revokeObjectURL(url);
    
});