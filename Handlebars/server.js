// ---- Modulos ----


const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');

// ---- Instancia del servidor ----
const app = express();
const routerProductos = require('./src/routes/productos.routes.js');

// ---- Middlewares ----
// app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));


// -- Motor de Plantilla --
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    // partialsDir: path.join(app.get('views'), 'partials'), 
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

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