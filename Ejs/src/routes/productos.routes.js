const express = require('express');
const routerProductos = express.Router();

// ---- DB ----
let DB_PRODUCTOS = [];

routerProductos.get('/', (req, res) => {
    res.render('vista', {DB_PRODUCTOS})
});

routerProductos.post('/productos', (req, res) => {
    DB_PRODUCTOS.push(req.body);
    res.redirect('/')
})

module.exports = routerProductos;