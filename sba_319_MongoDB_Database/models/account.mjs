import mongoose from "mongoose";
const Schema = mongoose.Schema;

const model = mongoose.model;

const accountSchema = new Schema({
    account_id:Number,
    limit:Number,
    products:[]
})

const Account = model("Account", accountSchema);

export default Account;