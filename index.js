const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}

app.set('view engine', 'ejs')

app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.get('/', (req, res) => res.render('home'))

app.listen(port, () => console.log(`http: ${port}`))