const express = require('express');
const app = express();
const conexionDB = require("./config/db");

const tareasRoutes= require('./routes/tareasRoutes');


require('dotenv').config();
app.use(express.json());
conexionDB();


// Rutas
app.use('/api', tareasRoutes);




// Escuchando el puerto 4000
const port = process.env.port
app.listen(port, () => {
    console.log("servidor corriendo en puerto 4000")
});
