require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Welcome to the login page</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome to the youtube</h2>')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})