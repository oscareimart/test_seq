const env = require('./env').envDev.DB
const Sequelize = require("sequelize")

const sequelize = new Sequelize(env.NAME_DB, env.USER_DB, env.PASSWORD_DB, {
    host: env.HOST_DB,
    dialect: env.DRIVE_DB,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db