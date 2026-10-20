const express = require('express');//server
const fs = require('fs');//Modulo para leer archivos
const path = require('path');//Modulo para las rutas 
const app = express();//instacia de express

//ruta absoluta al archivo JSON donde se guardan los datos
const DATA_FILE = path.join(__dirname,'data.json');

//middleware para interpretar el JSON en las solicitudes de (req.body)
app.use(express.json());

//servir archivos estaticos (HTML, css y JS) desde la carpeta public
app.use(express.static(path.join(__dirname,'public')));

// Ruta GET: leer los ususarios desde el archivo JSON
app.get('/api/usuarios',(req,res)=>{
    const data = fs.readFileSync(DATA_FILE);
    res.json(JSON.parse(data));
});

//Ruta de tipo: POST -> agregar un usuario
app.post('/api/usuarios',(req,res)=>{
    const data = JSON.parse(fs.readFileSync(DATA_FILE)); //Leer y convertir en forma asincrona
    const nuevo = req.body; // obtener los datos del cliente de la funcion de form.addEventListener('submit',.. -> agregar usuario
    nuevo.id=Math.max(0, ...data.map(u => u.id)) + 1 ; // generar el ID de autoincremento
    data.push(nuevo); // agregar nuevo usuario
    fs.writeFileSync(DATA_FILE, JSON.stringify(data,null,2));
    res.json({mensaje: 'Usuario agregado'});
});
//ruta Put, para editar usuario
app.put('/api/usuarios/:id',(req,res)=>{
    const data = JSON.parse(fs.readFileSync(DATA_FILE));
    const id = parseInt(req.params.id);
    const index = data.findIndex(u => u.id === id);
    if(index !== -1){
        data[index] ={...data[index], ...req.body, id};
        fs.writeFileSync(DATA_FILE, JSON.stringify(data,null,2));
        res.json({mensaje:'Usuario actualizado'});

    }else{
        res.status(404).json({error:'Usuario no encontrado'});
    }
});

// Ruta DELETE: Eliminar usuario por ID
app.delete('/api/usuarios/:id',(req,res)=>{
    let data = JSON.parse(fs.readFileSync(DATA_FILE));
    const id = parseInt(req.params.id);
    if (!data.some(u => u.id === id)) {
        return res.status(404).json({error: 'Usuario no encontrado'});
    }
    data = data.filter(u => u.id !== id);
    fs.writeFileSync(DATA_FILE,JSON.stringify(data,null,2));
    res.json({mensaje:'Usuario eleminado'});
});
const port = 3000;
app.listen(port,()=>{
 console.log(`http://localhost:${port}`);   
});
