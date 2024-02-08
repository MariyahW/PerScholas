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

// Router.post did not create post route as looking at the data there was a large nested array of objects. I will continue to work on best 
// implementation for adding the object. maybe two different forms/routers



export default Router;
