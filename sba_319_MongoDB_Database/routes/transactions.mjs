import express from "express";
import Transaction from "../models/transaction.mjs";

const Router = express.Router();

Router.get('/', async (req, res)=>{
    let trans = await Transaction.find();
    res.status(200).json(trans);
    })
    
    Router.get("/:id", async (req, res)=>{
        let trans = await Transaction.find({account_id:req.params.id});
        res.status(200).json(trans);
    })

Router.post



export default Router;
