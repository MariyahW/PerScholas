import mongoose from "mongoose";

const Schema =  mongoose.Schema;

const model = mongoose.model;

const custSchema = new Schema({
    username:String,
    name:String, 
    address:String, 
    birthdate:Date, 
    email:String, 
    accounts:[],
    tier_and_details:{}
})

const Customer = model("Customer", custSchema);

export default Customer;