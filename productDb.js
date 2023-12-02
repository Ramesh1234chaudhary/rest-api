require('dotenv').config();
const connectDb = require('./db/connect');
const productSchema = require('./model/product');
const productJson=require("./products.json")
const fs = require('fs');

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL);
         await productSchema.deleteMany();

        // Log the content of the JSON file
        console.log('JSON Content:', productJson);

        await productSchema.create(productJson);
        console.log('Success');
    } catch (err) {
        console.log(err);
    }
}

start();