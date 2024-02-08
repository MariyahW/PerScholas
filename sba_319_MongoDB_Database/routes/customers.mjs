import express from "express";
import Customer from "../models/customer.mjs";

const Router = express.Router();

Router.get('/', async (req, res)=>{
    let customers = await Customer.find();
    res.status(200).send(customers)
    }).post('/', async (req, res)=>{
        let newCustomer = req.body;
        await Customer.create({"username": newCustomer.username,
        "name": newCustomer.name,
        "address": newCustomer.address,
        "birthdate": newCustomer.birthdate,
        "email": newCustomer.email,
        "accounts": newCustomer.accounts,
        "tier_and_details":newCustomer.tier_and_details})
    }).delete('/', async (req, res)=>{
        let toDelete = req.body._id;
        await Customer.findByIdAndDelete(toDelete);
    })
    Router.patch('/:id', async(req, res)=>{
        let account = await Customer.findById(req.params.id);
     
        account.accounts.push(req.body.accounts)
        await Customer.findByIdAndUpdate(req.params.id, {accounts:account.accounts})
        console.log(account)
        res.status(200).json(account);
        
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

    


    
export default Router;
