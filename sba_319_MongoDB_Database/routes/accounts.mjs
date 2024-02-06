import express from "express";
import Account from "../models/account.mjs";

const Router = express.Router();

Router.get('/', async (req, res)=>{
let accounts = await Account.find();
res.status(200).json(accounts);
})

Router.get("/:id", async (req,res)=>{
    let accounts = await Account.find({account_id:Number(req.params.id)});
    res.status(200).json(accounts)
})

Router.post('/create', async (req, res)=>{
    let newAccount = req.body;
    await Account.create({"account_id": newAccount.account_id,
    "limit": newAccount.limit,
    "products":newAccount.products})
})

Router.patch

Router.delete

export default Router;
