// cargar las variables de entorno desde el archivo .env
require('dotenv').config();

//cargar el módulo mysql2 para conectarse a la base de datos
const mysql = require('mysql2');

//crear una conexión a la base de datos utilizando las variables de entorno
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // el host de la base de datos
  user: process.env.DB_USER, // el usuario de la base de datos
  // Cambio: permitir configurar el puerto de MySQL desde Docker Compose o desde .env.
  port: process.env.DB_PORT || 3306,
  password: process.env.DB_PASSWORD, // la contraseña de la base de datos
  database: process.env.DB_NAME // el nombre de la base de datos
});

//validar si la conexión se ha establecido correctamente
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida correctamente');
});

//exportar la conexión para que pueda ser utilizada en otros archivos
module.exports = connection;
