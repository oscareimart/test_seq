const Client = require('../models/Client');
const Detail = require('../models/Detail');
const Transaction = require('../models/Transaction')

const index = async (req, res) => {
    try {
        const transactions = await Transaction.findAll({
            include: [{
                model: Client,
                as: 'client'
            }]
        }).then(data => {
            res.send(data);
        })
        res.json(transactions)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving tutorials."
        })
    }
}

const findById = async (req, res) => {
    try {
        const id = req.params.id
        const transactionFound = await Transaction.findByPk(id)
        if (!transactionFound) return res.json({ message: 'Transaction not found...' })
        return res.json(transactionFound)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving tutorials."
        })
    }
}

const create = async (req, res) => {
    try {
        const newTransaction = await Transaction.create(req.body)
        if (req.body.tipo === "V") {
            req.body.idtransoriginal = null
        } else {
            req.body.idtransoriginal = newTransaction.id
        }
        const transactionFound = await Transaction.findByPk(newTransaction.id)
        const t = await transactionFound.update(req.body, {
            where: { id: newTransaction.id }
        })
        //Detail
        const detail = req.body.detail || []
        let det = []
        if (detail.length > 0) {
            for (const e of detail) {
                const obj = { ...e, transactionId: t.id }
                const newDetail = await Detail.create(obj)
                console.log(obj);
                det.push(newDetail)
            }
        }

        t.detail = det || []
        return res.json(t)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving tutorials."
        })
    }

}

const update = async (req, res) => {
    try {
        const id = req.params.id
        const transactionFound = await Transaction.findByPk(id)
        await transactionFound.update(req.body, {
            where: { id: id }
        })
        return res.json(transactionFound)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
                error.message || "Some error occurred while retrieving tutorials."
        })
    }

}

module.exports = {
    index, findById, create, update
}