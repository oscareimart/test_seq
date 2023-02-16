const express = require('express')
const app = express()
const env = require('./config/env').envDev.APP

app.set('port', env.PORT || 3003)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/info', (req, res) => {
    res.json({
        version: '1.0',
        author: 'OscarT'
    })
})

app.use(require('./routes/index.routes'))

const db = require("./config/db.config");
db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log(err);
        console.log("Failed to sync db: " + err.message);
    });

app.listen(app.get('port'), () => {
    console.log('Server start in port: ', app.get('port'));
})