const express = require("express");
const router = express.Router();
const path = require("path");

//definicion de las rutas y los manejadores

router.get("/",(req,res)=>{
    //res.send("Hola desde mi ruta de inicio, pagina principal")
    res.sendFile(path.join(__dirname+"/index.html"));
});

router.get("/registro",(req,res)=>{
    //res.send("Hola desde el registro");
    res.sendFile(path.join(__dirname+"/registro.html"));
});

module.exports = router;






