const Sequelize = require('../config/db.config').Sequelize
const sequelize = require('../config/db.config').sequelize
const Transaction = require('./Transaction')
const Product = require('./Product')

const Detail = sequelize.define("details", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    precio: {
        type: Sequelize.FLOAT(10, 2)
    },
    cantidad: {
        type: Sequelize.INTEGER,
    },
    productId: {
        type: Sequelize.INTEGER
    },
    transactionId: {
        type: Sequelize.INTEGER
    }
});

// Detail.hasMany(Transaction
// Detail.belongsToMany(Product, { through: Detail })
Detail.belongsToMany(Transaction, { through: Detail })

module.exports = Detail