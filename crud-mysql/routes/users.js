const express = require('express'); // Import the Express library to create a router for handling user-related routes
const router = express.Router();// create a new router instance to define routes for user operations
const db = require('../db'); // Import the database module to interact with the database for user-related operations

// mostrar todo los usuarios en raiz
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM users'; // Define the SQL query to select all users from the database    
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al obtener los usuarios');
        } else {
            res.render('index', { users: results });
        }
    });
});
// agrergar nuevo usuario
router.post('/add', (req, res) => {
    const { nombre, correo } = req.body;

    // Cambio: validar el correo antes de insertar para avisar al usuario si ya existe.
    const validateQuery = 'SELECT id FROM users WHERE correo = ? LIMIT 1';
    const insertQuery = 'INSERT INTO users (nombre, correo) VALUES (?, ?)';

    db.query(validateQuery, [correo], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                error: 'Error al validar el correo'
            });
        }

        if (results.length > 0) {
            return res.status(400).json({
                error: 'El correo ya esta registrado. Capture otro correo.'
            });
        }

        db.query(insertQuery, [nombre, correo], (err, result) => {
            if (err) {
                console.log(err);

                // Detectar error de correo duplicado si la base lo rechaza.
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({
                        error: 'El correo ya esta registrado. Capture otro correo.'
                    });
                }

                return res.status(500).json({
                    error: 'Error al agregar el usuario'
                });
            }

            res.json({ mensaje: 'Usuario agregado correctamente' });
        });
    });
});
// mostrar formulario para el usuario existente
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al obtener el usuario');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});
// actualizar usuario
router.post('/update/:id', (req, res) => {
    const id = req.params.id; // obtiene el ID del usuario a actualizar desde los parámetros de la URL
    const { nombre, correo } = req.body; // extrae el nuevo nombre y correo del cuerpo de la solicitud (Formulario)

    // Cambio: validar que el correo no pertenezca a otro usuario antes de actualizar.
    const validateQuery = 'SELECT id FROM users WHERE correo = ? AND id <> ? LIMIT 1';
    const updateQuery = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?';

    db.query(validateQuery, [correo, id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                error: 'Error al validar el correo'
            });
        }

        if (results.length > 0) {
            return res.status(400).json({
                error: 'El correo ya esta registrado por otro usuario. Capture otro correo.'
            });
        }

        db.query(updateQuery, [nombre, correo, id], (err, result) => {
            if (err) {
                console.log(err);

                // Cambio: si la base de datos detecta duplicado, responder con alerta manejable.
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({
                        error: 'El correo ya esta registrado por otro usuario. Capture otro correo.'
                    });
                }

                return res.status(500).json({
                    error: 'Error al actualizar el usuario'
                });
            }

            res.json({ mensaje: 'Usuario actualizado correctamente' });
        });
    });
});
// eliminar usuario
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al eliminar el usuario');
        } else {
            res.redirect('/');
        }
    });
});
//expotar todas las rutas en el app.js
module.exports = router;