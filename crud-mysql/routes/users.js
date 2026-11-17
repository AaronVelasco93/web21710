const express = require('express');               // Importamos Express
const router = express.Router();                  // Creamos un enrutador modular
const db = require('../db');                      // Importamos la conexión a la base de datos (MySQL)

//  Mostrar todos los usuarios (ruta raíz)
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.send('Error en la consulta');     // Si hay error, lo mostramos
    res.render('index', { users: results });              // Renderiza la vista 'index' con los datos de la BD
  });
});

//  Agregar nuevo usuario
router.post('/add', (req, res) => { 
    //  Extrae los datos enviados desde el formulario (nombre y correo)
    const { nombre, correo } = req.body;

    //  Consulta SQL para validar si el correo ya existe en la base de datos
    const validateQuery = 'SELECT id FROM users WHERE correo = ? LIMIT 1';

    //  Consulta SQL para insertar un nuevo usuario
    const insertQuery = 'INSERT INTO users (nombre, correo) VALUES (?, ?)';

    //  Ejecuta la consulta de validación pasando el correo como parámetro
    db.query(validateQuery, [correo], (err, results) => {

        //  Si ocurre un error en la consulta
        if (err) {
            console.log(err); // Muestra el error en consola
            return res.status(500).json({
                error: 'Error al validar el correo' // Respuesta al cliente
            });
        }

        //  Si ya existe un registro con ese correo
        if (results.length > 0) {
            return res.status(400).json({
                error: 'El correo ya esta registrado. Capture otro correo.'
            });
        }

        //  Si el correo NO existe, entonces procede a insertar el usuario
        db.query(insertQuery, [nombre, correo], (err, result) => {

            //  Si ocurre un error durante la inserción
            if (err) {
                console.log(err); // Mostrar error en consola

                // Detecta si el error es por duplicidad en la base de datos
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({
                        error: 'El correo ya esta registrado. Capture otro correo.'
                    });
                }

                //  Otro tipo de error general
                return res.status(500).json({
                    error: 'Error al agregar el usuario'
                });
            }

            //  Si todo sale bien, responde con mensaje de éxito
            res.json({ mensaje: 'Usuario agregado correctamente' });
        });
    });
});

//  Mostrar el formulario para editar un usuario existente
router.get('/edit/:id', (req, res) => {
  db.query(
    'SELECT * FROM users WHERE id = ?',                  // Busca al usuario por ID
    [req.params.id],
    (err, result) => {
      if (err) return res.send('Error al buscar usuario');
      res.render('edit', { user: result[0] });           // Renderiza la vista 'edit' con el usuario encontrado
    }
  );
});

//  Actualizar usuario existente
router.post('/update/:id', (req, res) => {

    const id = req.params.id; 
    //  Obtiene el ID del usuario desde la URL (por ejemplo: /update/3)

    const { nombre, correo } = req.body; 
    //  Extrae los nuevos valores enviados desde el formulario (nombre y correo)

    //  Consulta SQL para validar si el correo ya existe en otro usuario diferente
    const validateQuery = 'SELECT id FROM users WHERE correo = ? AND id <> ? LIMIT 1';

    //  Consulta SQL para actualizar los datos del usuario
    const updateQuery = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?';

    //  Ejecuta la validación para evitar correos duplicados en otros usuarios
    db.query(validateQuery, [correo, id], (err, results) => {

        //  Si ocurre un error en la consulta de validación
        if (err) {
            console.log(err); // Mostrar error en consola
            return res.status(500).json({
                error: 'Error al validar el correo'
            });
        }

        //  Si ya existe otro usuario con ese mismo correo
        if (results.length > 0) {
            return res.status(400).json({
                error: 'El correo ya esta registrado por otro usuario. Capture otro correo.'
            });
        }

        //  Si el correo es válido, procede a actualizar el usuario
        db.query(updateQuery, [nombre, correo, id], (err, result) => {

            //  Si ocurre un error al ejecutar la actualización
            if (err) {
                console.log(err); // Mostrar error en consola

                //  Detecta si la base de datos rechaza el cambio por duplicidad
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({
                        error: 'El correo ya esta registrado por otro usuario. Capture otro correo.'
                    });
                }

                //  Error general en la actualización
                return res.status(500).json({
                    error: 'Error al actualizar el usuario'
                });
            }

            //  Si todo sale correctamente, responde con mensaje de éxito
            res.json({ mensaje: 'Usuario actualizado correctamente' });
        });
    });
});

//  Eliminar un usuario
router.get('/delete/:id', (req, res) => {
  db.query(
    'DELETE FROM users WHERE id = ?',                    // Consulta SQL para eliminar por ID
    [req.params.id],
    err => {
      if (err) return res.send('Error al eliminar');
      res.redirect('/');                                 // Redirige después de eliminar
    }
  );
});

module.exports = router;   // Exporta las rutas para usarlas en app.js
