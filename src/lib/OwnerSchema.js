import mongoose from "mongoose";

const ownerModel = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    gymname: String
});

export const ownerDataSchema = mongoose.models.ownerdata || mongoose.model("ownerdata", ownerModel)