const express = require('express');
const path = require('path');
const app = express();

const port = 3016;

app.get('/',(req,res)=>{
    //res.send("Pagina de inicio");
    //res.sendFile("/Users/huronmarron/Desktop/clases2027/web21710/node/servidorMIo/index.html");
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port,()=>{
    console.log(`\n http://localhost:${port}`);
    console.log(`\n http://127.0.0.1:${port}`);
});
