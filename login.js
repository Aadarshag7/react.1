const express=require("express");
const app= express();
const jwt=require("jsonwebtoken");
const User = require("./models/user");
const cors=require("cors");
const bcrypt=require("bcryptjs");
const cookieParser=require("cookie-parser");
const connectDB=require("./db");
connectDB();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.post("/login",async(req,res)=>{
    try{
    const{email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
     return res.status(400).json({
        message:"invalid credentials"
     });
    }
 const isMatch=await bcrypt.compare(password,user.password);
 if(!isMatch){
    return res.status(400).json({
        message:"invalid credentials"
    });
 }
  
 const token= jwt.sign({id:user._id,role:user.role,},"aadarshag", 
    {expiresIn:"1d"}
 );

 res.cookie("token", token,{
   httpOnly:true 
 });

 res.status(200).json({
    message:"login successfully",
    data:{
        id:user._id,
        name:user.name,
        email:user.email
    }
 });


    }catch(error){
        console.log("error:",error);
        res.status(500).json({
            message:"server error"
        });
        
    }
});

app.listen(5122,()=>{
    console.log("welcome");
});