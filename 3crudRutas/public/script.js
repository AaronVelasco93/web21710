// script.js - Lógica del CRUD en el frontend usando fetch y DOM

// Referencias a elementos del DOM (formulario, tabla, campos)
const tabla = document.getElementById('tabla');
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');

let editando = false;     // Bandera para saber si se está editando o agregando
let usuarioId = null;     // ID del usuario que se está editando (si aplica)

// Evento para enviar el formulario (Agregar o Editar)
form.addEventListener('submit', async e => {
  e.preventDefault(); // Previene que se recargue la página

  const datos = {
    nombre: nombre.value,
    correo: correo.value
  };

  if (editando) {
    // 🔵 Si estamos en modo edición: actualizar (PUT)
    await fetch(`/api/usuarios/${usuarioId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    editando = false;
    usuarioId = null;
    document.getElementById('btnGuardar').textContent = 'Agregar';
  } else {
    // 🟢 Si no estamos editando: agregar nuevo usuario (POST)
    await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
  }

  form.reset();           // Limpia el formulario
  M.updateTextFields();   // Actualiza las etiquetas flotantes de Materialize
  cargar();               // Recarga la tabla
});

// 🧾 Función para cargar los usuarios desde el servidor y mostrarlos en la tabla
async function cargar() {
  const res = await fetch('/api/usuarios');
  const datos = await res.json();
  tabla.innerHTML = ''; // Limpia la tabla antes de agregar contenido

  datos.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.nombre}</td>
      <td>${user.correo}</td>
      <td>
        <button class="btn-small blue" onclick="llenarFormulario(${user.id}, '${user.nombre}', '${user.correo}')">Editar</button>
        <button class="btn-small red" onclick="eliminar(${user.id})">Eliminar</button>
      </td>`;
    tabla.appendChild(row);
  });
}

// ✏️ Llena el formulario con los datos del usuario seleccionado para editar
function llenarFormulario(id, nombreValor, correoValor) {
  nombre.value = nombreValor;
  correo.value = correoValor;
  usuarioId = id;
  editando = true;
  document.getElementById('btnGuardar').textContent = 'Actualizar';
  M.updateTextFields(); // Refresca las etiquetas flotantes en los inputs
}

// ❌ Elimina un usuario después de confirmar
async function eliminar(id) {
  if (confirm('¿Eliminar usuario?')) {
    await fetch(`/api/usuarios/${id}`, { method: 'DELETE' });
    cargar(); // Vuelve a cargar la tabla después de eliminar
  }
}

// 🔄 Llamada inicial para mostrar los usuarios al cargar la página
cargar();