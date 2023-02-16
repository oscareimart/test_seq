const Product = require('../models/Product')
const Detail = require('../models/Detail')

const index = async (req, res) => {
    try {
        const det = await Detail.findAll()
        const products = await Product.findAll().then(data => {
            res.send(data);
        })
        res.json(products)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving."
        })
    }
}

const findById = async (req, res) => {
    try {
        const id = req.params.id
        const productFound = await Product.findByPk(id)
        if (!productFound) return res.json({ message: 'Product not found...' })
        return res.json(productFound)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving."
        })
    }
}

const create = async (req, res) => {
    try {
        // const productFound = await Product.findOne({ where: { nit: req.body.nit } })
        // if (productFound) return res.json({ message: "Product alredy exists..." })
        const newProduct = await Product.create(req.body)
        return res.json(newProduct)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving."
        })
    }

}

const update = async (req, res) => {
    try {
        const id = req.params.id
        const productFound = await Product.findByPk(id)
        await productFound.update(req.body, {
            where: { id: id }
        })
        return res.json(productFound)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving."
        })
    }

}

module.exports = {
    index, findById, create, update
}