const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log( `Port: ${port}.`)
})

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/express', (req, res) => {
    res.send('Creating routes with Express is simple!')
})

app.get("/user", (req, res) => {
    res.send("Received a GET request for user!")
  })

  app.get("/user/:userID", (req, res) => {
    res.send(`Navigated to the user page for: ${req.params.userID}.`);
  });
  
  app.get("/user/:userID/profile", (req, res) => {
    res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
  });
  
  app.get("/user/:userID/profile/:data", (req, res) => {
    res.send(
      `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
    );
  });
  
  
  app.post("/user", (req, res) => {
    res.send("Received a POST request for user!")
  })