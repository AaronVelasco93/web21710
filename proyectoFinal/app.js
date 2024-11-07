const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

/*Puerto*/
const port = 3008; 
/*instanciar*/ 
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
//analizar los datos del cuerpo de las solicitudes HTTP, especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET

//motor de plantillas para html de forma dinamica
app.set('view engine', 'ejs');

//creedenciales para DB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: '3308'
});

//conexion a la DB
db.connect(err=>{
    if(err){
        console.log(`Error al momento de hacer conexion BB: ${err}`);
    }else{
        console.log(`Conexion realizada :3`);
    }
});

//server inicio
app.listen(port,()=>{
    console.log(`El server esta en escucha desde http://localhost:${port}`);
});

//Mostrar lista de usuarios

app.get('/',(req,res)=>{
    //Consulta  a la base de datos
    const query = 'SELECT * FROM user';
    // trabajar con la conexion
    db.query(query,(err,results)=>{
        if(err){
            //mensaje de error para el usuario
            console.error(`Error al recuperar datos -> Codigo de error:${err}`);
            res.send('Error en recuperar datos');
        }else{
            res.render('index',{users: results});
        }

    });    

});


//agregar usuario


app.post('/add',(req,res)=>{
    const {name,email} = req.body;
    const query = 'INSERT INTO users (name, email)VALUE (?,?)';
    db.query(query,[name,email],(err)=>{
        if(err){
            console.error(`Error al insertar usuarios: Codigo-> ${err}`);
            res.send('Error');
        }else{
             res.redirect('/');   
        }
    });
});


