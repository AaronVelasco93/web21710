// app.js - Archivo principal del servidor Express

const express = require('express'); // Importa el framework Express para crear el servidor
const path = require('path');       // Módulo de Node.js para trabajar con rutas de archivos
const app = express();              // Crea una instancia de la aplicación Express

const userRoutes = require('./routes/users'); // Importa las rutas de usuarios desde el archivo users.js

// Middleware para interpretar datos JSON en las solicitudes
app.use(express.json());

// Middleware para servir archivos estáticos (HTML, CSS, JS) desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Middleware que monta las rutas de usuarios bajo el prefijo /api/usuarios
app.use('/api/usuarios', userRoutes);

// Inicia el servidor en el puerto especificado y muestra un mensaje en consola
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
