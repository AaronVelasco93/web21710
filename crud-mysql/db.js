require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

const mysql = requiere('mysql2'); // Importar el módulo mysql2 para conectarse a la base de datos MySQL

const connection = mysql.createConnection({
    host: process.env.DB_HOST,              // Dirección del servidor de base de datos
    user: process.env.DB_USER,              // Usuario de la base de datos
    password: process.env.DB_PASSWORD,      // Contraseña de la base de datos
    database: process.env.DB_NAME,          // Nombre de la base de datos
    port: process.env.DB_PORT               // Puerto de la base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida correctamente.');
});

module.exports = connection; // Exportar la conexión para usarla en otros archivos