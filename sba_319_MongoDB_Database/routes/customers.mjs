import express from "express";
import Customer from "../models/customer.mjs";

const Router = express.Router();

Router.get('/', async (req, res)=>{
    let customers = await Customer.find();
    res.status(200).json(customers);
    })
    
    Router.get("/search", async (req, res)=>{
        let email = req.query["email"];
        let account = req.query["account"];
        if(email){let customers = await Customer.find({email:String(email)});
        res.status(200).json(customers);}
        else if(account){
            let customers = await Customer.find({accounts:Number(account)});
            res.status(200).json(customers);
        }
        
    })

    

Router.post

Router.patch

Router.delete

export default Router;
