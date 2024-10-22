const express = require("express");
const app= express();
const port = 3099;
const routes = require("./routes");

app.use("/",routes);

app.listen(port,()=>{
    console.log(`Servidor en escucha desde http://localhost:${port}`);
})

