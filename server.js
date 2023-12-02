const express =require('express');
const app =express();
const product_routes=require('./routes/product')
const connectDb=require("./db/connect")
require('dotenv').config()


app.get('/',(req,res)=>{  
 res.send('hii, i am live')
})

//set router 
app.use('/api/product',product_routes) 

connectDb(process.env.MONGODB_URL);

const PORT =process.env.PORT ||4500;
app.listen(PORT,()=>{
    console.log("server running") 
})