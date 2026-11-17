require('dotenv').config();
//  Carga las variables de entorno desde el archivo .env (como PORT o credenciales de base de datos)

const express = require('express');
//  Importa Express, el framework para crear servidores web con Node.js

const path = require('path');
//  Importa el módulo 'path' de Node.js para trabajar con rutas de archivos de forma segura

const app = express();
//  Crea una instancia de aplicación de Express

const userRoutes = require('./routes/users');
//  Importa el archivo de rutas donde se manejan las operaciones CRUD para usuarios

//  Configura el motor de plantillas EJS
app.set('view engine', 'ejs'); 
// Le dice a Express que renderice archivos .ejs como vistas

app.set('views', path.join(__dirname, 'views')); 
// Define la carpeta donde están guardadas las vistas .ejs

app.use(express.urlencoded({ extended: false }));
//  Middleware que permite leer los datos enviados desde formularios HTML (formulario POST)

//  Hacer pública la carpeta 'public' para servir archivos estáticos (CSS, imágenes, JS del frontend)
app.use(express.static(path.join(__dirname, 'public')));
 
// Cambio: permitir solicitudes JSON enviadas por fetch desde los formularios.
app.use(express.json());

//  Middleware de rutas: todas las rutas definidas en 'routes/users.js' estarán disponibles desde "/"
app.use('/', userRoutes);

//  Define el puerto desde variables de entorno, o por defecto el 3000
const PORT = process.env.PORT || 3000;

//  Inicia el servidor y lo pone en escucha
app.listen(PORT, () => console.log(` Servidor en http://localhost:${PORT}`));
