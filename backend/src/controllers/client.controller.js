const Client = require('../models/Client')

const index = async (req, res) => {
    try {
        const clients = await Client.findAll().then(data => {
            res.send(data);
        })
        res.json(clients)
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
        const clientFound = await Client.findByPk(id)
        if (!clientFound) return res.json({ message: 'Client not found...' })
        return res.json(clientFound)
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
        const clientFound = await Client.findOne({ where: { nit: req.body.nit } })
        if (clientFound) return res.json({ message: "Client alredy exists..." })
        const newClient = await Client.create(req.body)
        return res.json(newClient)
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
        const clientFound = await Client.findByPk(id)
        await clientFound.update(req.body, {
            where: { id: id }
        })
        return res.json(clientFound)
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