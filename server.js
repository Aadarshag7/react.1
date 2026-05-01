const express=require("express");
const hello=require("./hello")
const app=express();
app.get("/notes",(req,res)=>{
    res.json(hello);
});
 app.listen(5001,()=>{
    console.log("Server start");
 });


 