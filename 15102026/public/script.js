// script.js - Manejo de la interfaz y peticiones al backend con botón Editar

// Obtener referencias a elementos del DOM
const tabla = document.getElementById('tabla');          // Tabla donde se mostrarán los usuarios
const form = document.getElementById('formulario');      // Formulario para agregar o editar usuarios
const nombre = document.getElementById('nombre');        // Campo de entrada para el nombre
const correo = document.getElementById('correo');        // Campo de entrada para el correo

let editando = false;     // Indica si estamos editando
let usuarioId = null;     // ID del usuario a editar

// Mostrar usuarios en la tabla
async function cargarUsuarios() {
  const res = await fetch('/api/usuarios');
  const datos = await res.json();
  tabla.innerHTML = '';

  datos.forEach(u => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${u.id}</td>
      <td>${u.nombre}</td>
      <td>${u.correo}</td>
      <td>
        <button onclick="llenarFormulario(${u.id}, '${u.nombre}', '${u.correo}')">Editar</button>
        <button onclick="eliminar(${u.id})">Eliminar</button>
      </td>`;
    tabla.appendChild(row);
  });
}

// Rellenar formulario para editar
function llenarFormulario(id, nombreValor, correoValor) {
  nombre.value = nombreValor;
  correo.value = correoValor;
  usuarioId = id;
  editando = true;
  document.querySelector('button[type="submit"]').textContent = 'Actualizar';
}

// Evento para agregar o actualizar usuario
form.addEventListener('submit', async e => {
  e.preventDefault();
  const datos = { nombre: nombre.value, correo: correo.value };

  if (editando) {
    // Actualizar
    await fetch('/api/usuarios/' + usuarioId, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    editando = false;
    usuarioId = null;
    document.querySelector('button[type="submit"]').textContent = 'Agregar';
  } else {
    // Agregar nuevo
    await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
  }

  form.reset();
  cargarUsuarios();
});

// Eliminar usuario
async function eliminar(id) {
  if (confirm('¿Eliminar usuario?')) {
    await fetch('/api/usuarios/' + id, { method: 'DELETE' });
    cargarUsuarios();
  }
}

// Cargar usuarios al inicio
cargarUsuarios();
