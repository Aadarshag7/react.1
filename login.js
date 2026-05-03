const express=require("express");
const app= express();
const jwt=require("jsonwebtoken");
const User = require("./models/user");
const connectDB=require("./db");
connectDB();
app.use(express.json());
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
  
 const token= jwt.sign({id:user._id},"aadarshag", 
    {expiresIn:"1d"}
 );

 res.cookie("token", token,{
   httpOnly:true 
 });

 res.status(200).json({
    message:"login successfully",
    data:{
        id:user._id,
        name:user._name,
        email:user._email
    }
 });


    }catch(error){
        console.log("error:",error);
        res.status(500).json({
            message:"server error"
        });
        
    }
});
