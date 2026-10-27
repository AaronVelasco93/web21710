const express = require('express');
const path = require('path');
const app = express();

const userRoutes = require('./routes/users');

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/usuarios',userRoutes);

const PORT = 3005;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});




