const express=require("express");
const connectDB=require("./db");
const Note=require("./models/note");
const app=express();
connectDB();
app.use(express.json());
app.get("/",async(req,res)=>{
    try{
        
  const notes=await Note.find();
   res.status(200).json(notes);
    } catch(error){
        console.log("errrors:",error);
        res.status(500).json({
            error:"failed to fetch"
        });
    }
   });

   app.listen(5009,()=>{
    console.log("welcome");
   })

   
