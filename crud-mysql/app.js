require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express'); // Importar el framework Express
const path = require('path'); // Importar el módulo path para manejar rutas de archivos
const app = express(); // Crear una instancia de la aplicación Express

const userRoutes = require('./routes/users'); // Importar las rutas de usuario desde el archivo userRoutes.js

app.set('view engine', 'ejs'); // Configurar EJS como el motor de plantillas

app.set('views', path.join(__dirname, 'views')); // Configurar la carpeta de vistas

app.use(express.urlencoded({ extended: false })); // Middleware para analizar datos de formularios que se mandan por metodo post

app.use(express.static(path.join(__dirname, 'public'))); // Configurar la carpeta de archivos estáticos

app.use('/',userRoutes); // Usar las rutas de usuario para todas las solicitudes a la raíz

const PORT = process.env.PORT || 3010; // Obtener el puerto desde las variables de entorno o usar 3000 por defecto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`); // Iniciar el servidor y mostrar un mensaje en la consola
});





