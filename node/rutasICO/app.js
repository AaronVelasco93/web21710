const express = require("express");
const path = require("path");
const pagesRoutes = require('./routes/pages');

const app = express();

const port = 3050;

app.use(express.static('public'));

app.use('/',pagesRoutes);

app.get('/',(req,res)=>{
    res.redirect('/index');
});
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});