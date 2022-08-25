// ---- Modulos ----
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// ---- Instancia del servidor ----
const app = express();
const routerProductos = require('./src/routes/productos.routes');

// ---- Middlewares ----
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));

// ---- MOTOR DE PLANTILLA ---- //
app.set('views', './views');
app.set('view engine', 'ejs');

// ---- Rutas ----
app.use('/', routerProductos);


// ---- Servidor ----
const PORT = 8080;
const server = app.listen(PORT, ()=> {
    console.log(`Servidor http en http://localhost:8080/`)
})
server.on('error', err => {
    console.error(`Error en el servidor : ${err}`);
})