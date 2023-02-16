const env = require('dotenv').config()

const envDev = {
    DB: {
        HOST_DB: process.env.HOST_DB || 'localhost',
        USER_DB: process.env.USER_DB || 'root',
        PASSWORD_DB: process.env.PASSWORD_DB || '',
        NAME_DB: process.env.NAME_DB || 'app',
        DRIVE_DB: process.env.DRIVE_DB || 'mysql',
    },
    APP: {
        PORT: process.env.PORT || '3000'
    }

}

module.exports = { envDev }