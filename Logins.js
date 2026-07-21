const express=require("express");
const db=require("./datas");
const cors=require("cors");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const app=express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5123",
    credentials:true
}));
app.post("/login",async(req,res)=>{
    try{
const{email,password}=req.body;
if(!email||!password){
    return res.status(400).json({
        message:"Field is required"
    });

}
 const[userss]=db.query("SELECT * FROM users WHERE Email=?",
    [email]
 );

 if(userss.length===0){
    res.status(404).json({
        message:"User don't exist"
    });
 }

 const usersss=userss[0];
 const match= await bcrypt.compare(password,usersss.password);

 if(!match){
    return res.status(401).json({
        message:"Invalid Credentials"
    });
 }

 const token=jwt.sign({id:usersss._id},"aadarsh.ag",{
    expiresIn:"1d"
 });

 

 return res.status(200).json({
    message:"Login Success"
 });

 } catch(error){
    console.log("Errors:",error)

 }

});