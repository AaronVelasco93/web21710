const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/index.html'));
});

router.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/registro.html'));
});

module.exports=router;
