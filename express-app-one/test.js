const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log( `Port: ${port}.`)
})

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/test', (req, res) => {
    res.send('This is a test')
})

app.get("/tribute/:district", (req, res) => {
    res.send(`You have volunteered to be the tribute of ${req.params.district}`);
  });

 