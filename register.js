
const express= require("express");
const connectDB= require("./db");
const User=require("./models/user");
const app=express();
const bcrypt=require("bcryptjs");
app.use(express.json());
connectDB();
app.post("/register",async(req,res)=>{
    try{
    const{name,email,password}=req.body;
    if(!name||!email||!password){
        return res.status(400).json({
            message:"Field is required"
        });
    }

    const userExist=await User.findOne({email});
    if(userExist){
        return res.status(400).json({
            message:"User already exist"
        });
    }
 const hashedpass= await bcrypt.hash(password,10);

 const user=new User({
    name,
    email,
    password:hashedpass,
 });
  
 await user.save();

res.status(201).json({
    message:"created successfully",
    data:user
});
    }catch(error){
        console.log("error:",error);
        res.status(500).json({
            message:"server error"
        });
    }
});

app.listen(5013,()=>{
    console.log("welcome")
})