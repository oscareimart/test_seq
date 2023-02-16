const Sequelize = require('../config/db.config').Sequelize
const sequelize = require('../config/db.config').sequelize
// const Transaction = require('./Transaction')

const Client = sequelize.define("clients", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nit: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true
    },
    nombre: {
        type: Sequelize.STRING(256)
    },
    fechacreacion: {
        type: Sequelize.DATE
    },
    fechamodificacion: {
        type: Sequelize.DATE
    },
});

// Client.hasMany(Transaction)

module.exports = Client