//Importar el modulo HTTP que viene incluido en Node.js
const http = require('http');
//Definimos el puerto que va a correr
const port = 3009;
//crear servidor 
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hola mundo');

});

//Escuchar el puerto especifico
server.listen(port,()=>{
    console.log(`El servidor esta funcionando por medio de http://localhost:${port}`);
});