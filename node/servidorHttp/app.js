// Importar el modulo de http que viene incluido en Node.js
const http = require('http');

// definir puerto donde sale la app
const port = 3056;

// crear el servidor

const server = http.createServer((req,res)=>{
    // Establecer el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hola mundo como estas");
});
server.listen(port,()=>{
        console.log(`http://localhost:${port}`);
});
