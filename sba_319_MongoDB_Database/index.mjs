import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3000;
const app = express();




mongoose.connect(process.env.URI);

// importing our routes from grades.mjs
import accounts from "./routes/accounts.mjs";
import customers from "./routes/customers.mjs";
import transactions from "./routes/transactions.mjs";

app.use(express.static('views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'))



app.use("/accounts", accounts);
app.use("/customers", customers);
app.use("/transactions", transactions);

app.get("/", (req, res) => {
    res.render('index')
  })

  app.get("/new", (req, res)=>{
    res.render("accounts")
  })
  app.get('/cust', (req, res)=>{
    res.render("cust")
  })
  app.get('/trans', (req, res)=>{
    res.render("trans")
  })
  

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  })