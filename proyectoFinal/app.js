const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
/**/ 
const app = express();

app.use(bodyParser.urlencoded({extend:false}));
//analizar los datos del cuerpo de las solicitudes HTTP, especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET