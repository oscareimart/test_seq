const Detail = require('./Detail')

const Sequelize = require('../config/db.config').Sequelize
const sequelize = require('../config/db.config').sequelize

const Product = sequelize.define("products", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
    },
    descripcion: {
        type: Sequelize.STRING(80)
    },
    precio: {
        type: Sequelize.FLOAT(10, 2)
    },
    saldo: {
        type: Sequelize.FLOAT(10, 2)
    },
    fechamodificacion: {
        type: Sequelize.DATE
    },
});

// Product.belongsToMany(Detail, { through: Detail })
Product.hasMany(Detail)

module.exports = Product