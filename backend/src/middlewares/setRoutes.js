const express = require('express')
const router = express.Router()
const middErr = require('../middlewares/handleErrors')
const productController = require('../controllers/product.controller')

exports.resources = (req, res, next) => {

    if (req.baseUrl = '/products') {
        if (req.method === 'GET') {
            console.log(req.method);
            console.log(router.get(req.baseUrl, productController.index))
            next()
        }

    }
    // req.path = '/products'
    // req.middlewares = [middErr.errors]
    // req.controller = productController
    // console.log(req);
    // exports.resources = (path, middlewares, controller) => {

    // router.get(`${req.path}/:id`, req.middlewares ? req.middlewares : [], req.controller.findById)
    // router.post(req.path, req.middlewares ? req.middlewares : [], req.controller.create)
    // router.put(`${req.path}/:id`, req.middlewares ? req.middlewares : [], req.controller.update)
    next()
}