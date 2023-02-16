const Sequelize = require('../config/db.config').Sequelize
const sequelize = require('../config/db.config').sequelize
const Client = require('./Client')
const Detail = require('./Detail')

const Transaction = sequelize.define("transactions", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATE
    },
    tipo: {
        type: Sequelize.ENUM('V', 'D'),
    },
    idtransoriginal: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    clientId: {
        type: Sequelize.INTEGER,
        // references: 'clients', // <<< Note, its table's name, not object name
        // referencesKey: 'id'
    }
});
// Transaction.hasMany(Detail)
Transaction.belongsTo(Client, { onUpdate: 'RESTRICT' })
// Transaction.belongsToMany(Detail, { through: Detail })
Client.hasMany(Transaction)

module.exports = Transaction