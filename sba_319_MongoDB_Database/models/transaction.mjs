import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const model = mongoose.model;

const transSchema= new Schema({
    account_id:Number,
    transaction_count:Number, 
    bucket_start_date:Date, 
    bucket_end_date:Date,
    transactions:[]
})

const Transaction = model("Transaction", transSchema);

export default Transaction;