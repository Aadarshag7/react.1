const express=require("express");
const cors=require("cors");
const connectDB=require("./db");



const app= express();
connectDB();
app.use(cors());
app.get("/",(req,res)=>{
    res.json([{
        id:1, title:"ag", content:"hero"
    }]);
});
        

app.listen(5005,()=>{
    console.log("Hello Server is running");
});
