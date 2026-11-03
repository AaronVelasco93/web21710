// Importa el módulo Express, que permite crear rutas y manejar peticiones HTTP
const express = require('express');

// Módulo del sistema de archivos para leer y escribir archivos JSON
const fs = require('fs');

// Módulo para trabajar con rutas de archivo de forma segura
const path = require('path');

// Crea un enrutador de Express para definir rutas específicas
const router = express.Router();

// Ruta del archivo donde se almacenan los usuarios en formato JSON
const DATA_PATH = path.join(__dirname, '..', 'data', 'users.json');

// GET /api/usuarios - Leer todos los usuarios
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH)); // Leer el archivo y convertir a objeto
  res.json(data); // Enviar como respuesta en formato JSON
});

// POST /api/usuarios - Crear un nuevo usuario
router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH)); // Leer archivo existente
  const nuevo = req.body; // Obtener datos del cuerpo de la solicitud
  // Asignar un ID único basado en el último elemento
  nuevo.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  data.push(nuevo); // Agregar nuevo usuario al arreglo
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2)); // Guardar el archivo actualizado
  res.json({ mensaje: 'Usuario agregado' });
});

// PUT /api/usuarios/:id - Actualizar un usuario existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id); // Obtener el ID de la URL
  const data = JSON.parse(fs.readFileSync(DATA_PATH));
  const index = data.findIndex(u => u.id === id); // Buscar índice del usuario
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body }; // Reemplazar datos antiguos con los nuevos
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    res.json({ mensaje: 'Usuario actualizado' });
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

// DELETE /api/usuarios/:id - Eliminar un usuario
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let data = JSON.parse(fs.readFileSync(DATA_PATH));
  data = data.filter(u => u.id !== id); // Filtrar al usuario a eliminar
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2)); // Guardar cambios
  res.json({ mensaje: 'Usuario eliminado' });
});

// Exportar el router para ser usado desde app.js
module.exports = router;