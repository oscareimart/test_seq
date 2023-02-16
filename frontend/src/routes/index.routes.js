const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
    let data = await axios.get('http://127.0.0.1:3000/clients')
    data.title = "Clientes"
    data.fields = ["Nit", "Nombre", "Fecha Creacion", "Fecha Modificacion", "Acciones"]
    return res.render('index_clients', { data })
})

router.get('/products', async (req, res) => {
    let data = await axios.get('http://127.0.0.1:3000/products')
    data.title = "Productos"
    data.fields = ["Codigo", "Descripcion", "Precio", "Saldo", "Fecha Creacion", "Fecha Modificacion", "Acciones"]
    return res.render('index_products', { data })
})

router.get('/transactions', async (req, res) => {
    let data = await axios.get('http://127.0.0.1:3000/transactions')
    data.title = "Transacciones"
    data.fields = ["Tipo", "Id Transaccion", "Cliente", "Fecha Creacion", "Fecha Modificacion", "Acciones"]
    return res.render('index_transactions', { data })
})

module.exports = router