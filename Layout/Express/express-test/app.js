const express = require('express')
const app = express()
const port = 3002
const data1 = require('./ProductData.json')
const data2 = require('./ProductPlusData.json')
const data3 = require('./ProductDetail.json')

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/Products/all', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")
    res.send(JSON.stringify(data1));
})


app.get('/Products/main', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")
    res.send(JSON.stringify(data2));
})


for (let i = 0; i < 20; i++) {
    app.get('/Product/' + i, (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.setHeader("Access-Control-Allow-Methods", "GET")
        res.send(JSON.stringify(data3[i - 1]));
    })
}