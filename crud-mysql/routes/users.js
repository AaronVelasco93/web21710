const express = require('express');//Importamos express
const router = express.Router(); //crear un enrutador modular
const db = require('../db'); // Importar la conexion
const { error } = require('node:console');
//Mostrar todos los usuarios
router.get('/',(req,res)=>{
    let consulta = 'SELECT id, nombre, correo, creado_el FROM users';
    db.query(consulta,(err,results)=>{
        if(err) return res.send('Error en la consulta');
        res.render('index',{
            users: results
        });

    });
});

//Agregar nuevo usuario
router.post('/add',(req,res)=>{
    const {nombre,correo}= req.body;
    
    //consulta que nos ayudas a validar si el correo ya existe en DB
    const validateQuery='SELECT id FROM users WHERE correo = ? LIMIT 1';

    //Consulta SQL para insertar un nuevo usuario
    const insertQuery='INSERT INTO users (nombre,correo) VALUES (?,?)';

    //Ejecutar la consulta de validacion pasando el correo como un parametro
    db.query(validateQuery,[correo],(err,results)=>{
        if(err){
            console.log(err);//mostrar error en consola
            return res.status(500).json({
                error:'Error al validar el correo'
            });
        }
        //si ya eciste un registro con el correo
        if(results.length >0){
            return res.status(400).json({
                error: 'El correo ya esta registrado. Captura otro correo.'
            });
        }
    });

    //En el caso de que el correo si exista de genera el registro
    db.query(insertQuery,[nombre,correo],(err,results)=>{
        //si ocurre un error en el insert
        if(err){
            console.log(err);//error en consola

            if(err.code === 'ER_DUP_ENTRY'){
                return res.status(400).json({
                    error: 'El correo ya esta registrado'
                });
            }
            //otro tipo de error general
            return res.status(500).json({
                error: 'Error al agregar usuario'
            });

        }
        res.json({
            mensaje: 'Usuario agregado correctamente'
        });
    });
});

//mostrar el formulario para editar un usuario existente
router.get('/edit/:id',(req,res)=>{
    let consulta= 'SELECT * FROM users WHERE id = ?';
    db.query(consulta,[req.params.id],(err,results)=>{
        if(err) return res.send('Error al buscar al usuario');
        res.render('edit',{
            user: results[0]
        });
    });
});

//actualizar usuario existente
router.post('/update/:id',(req,res)=>{
    const id = req.params.id;
    const {nombre, correo}=req.body;
    const validateQuery = 'SELECT id FROM users WHERE correo = ? AND id <> ?LIMIT 1';
    const updateQuery = 'UPDATE users SET nombre = ?, correo = ? WHERE id = ?';
    db.query(validateQuery,[correo,id],(err,results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                error: 'Error al validar el correo'
            });
        }
        //si ya existe otro  usuario con el mismo corre
        if(results.length >0 ){
            return res.status(400).json({
                error: 'Error, el correo ya esta registrado con un usuario'
            });
        }
    });
    
    //si el correo es valido procede con la actualizacion
    db.query(updateQuery,[nombre, correo],(err,results)=>{
        if(err){
            console.log(err);
        }
        //detecta si la base de datos rechaza el cambio por duplicidada
        if(err.code === 'ER_DUP_ENTRY'){
            return res.status(400).json({
                error: 'El correo ya esta registrado por otro usuario'
            });

        }
        res.json({
            mesaje: 'Usuarios Actualizado correctamente'
        });

    });
});

router.get('/delete/:id',(req,res)=>{
    let consulta = 'DELETE FROM users WHERE id = ?';
    db.query(consulta,[req.params.id],err=>{
        if(err) return res.send('Error al elminar');
        res.redirect('/');
    });
});
module.exports = router;