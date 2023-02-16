const express = require('express')
const app = express()
const path = require('path')

app.set('port', process.env.PORT || 3002)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require('./routes/index.routes'))

app.listen(app.get('port'), () => {
    console.log('Server start in port: ', app.get('port'));
})