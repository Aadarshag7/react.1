const express=require("express");
const connectDB=require("./db");
const Note=require("./models/note");
const auth=require("./middleware/auth");
const app=express();
const cors=require("cors");
const cookieParser=require("cookie-parser");
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.get("/",auth,async(req,res)=>{
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

   
