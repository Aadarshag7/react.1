const express=require("express");
const product = require("./models/product");
const app=express();
const cors=require("cors");
const connectDB=require("./db");
const Product=require("./models/product");
connectDB();
app.use(cors({
    origin:"http://localhost:5123",
    credentials:true
}));
app.get("/",async(req,res)=>{
    try{
    const prod=await Product.find();
    res.status(200).json(prod);
    }
    catch(error){
        console.log("Errors:",error);
    }
});

app.listen(5132,()=>{
    console.log("welcome");
});
