const express = require('express')
const router = express.Router()
const middErr = require('../middlewares/handleErrors')
const clientController = require('../controllers/client.controller')
const productController = require('../controllers/product.controller')
const transactionController = require('../controllers/transaction.controller')
const middResource = require('../middlewares/setRoutes')

router.get('/clients', middErr.errors, clientController.index)
router.get('/clients/:id', middErr.errors, clientController.findById)
router.post('/clients', middErr.errors, clientController.create)
router.put('/clients/:id', middErr.errors, clientController.update)

// req.path = '/products'
// req.middlewares = [middErr.errors]
// req.controller = productController
router.use('/products', middResource.resources, (req, res) => { res.json({ meesage: 'ok' }) })
// router.use('/products', (req, res) => {
//     req.path = '/products'
//     req.middlewares = [middErr.errors]
//     req.controller = productController
//     middResource.resources(
//         '/products',
//         [middErr.errors],
//         productController)
// }
// )

// router.get('/products', middErr.errors, productController.index)
// router.get('/products/:id', middErr.errors, productController.findById)
// router.post('/products', middErr.errors, productController.create)
// router.put('/products/:id', middErr.errors, productController.update)

router.get('/transactions', middErr.errors, transactionController.index)
router.get('/transactions/:id', middErr.errors, transactionController.findById)
router.post('/transactions', middErr.errors, transactionController.create)
router.put('/transactions/:id', middErr.errors, transactionController.update)

// router.get('/details', middErr.errors, Controller.index)
// router.get('/transctions/:id', middErr.errors, clientController.findById)
// router.post('/transctions', middErr.errors, clientController.create)
// router.put('/transctions/:id', middErr.errors, clientController.update)

module.exports = router