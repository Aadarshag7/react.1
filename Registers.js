const express= require("express");
const app= express();
const cors=require("cors");
const bcrypt=require("bcryptjs");
const db=require("./datas");
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.post("/store",async(req,res)=>{
console.log(req.body);
    try{
        const{name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({
                message:"Field is required"
            });
        }

        const[userss]=await db.query("SELECT * FROM users WHERE email=?",
            [email]
        );

        if(userss.length>0){
             return res.status(400).json({
                message:"User already exists"
            });
        }


    const hashpw= await bcrypt.hash(password,2);

    await db.query("INSERT INTO users(Name,Email,Password) VALUES(?,?,?)",
        [name,email,hashpw]
    );
  return  res.status(201).json({
        message:"Created succssfully"
    });
    
    }catch(error){
        console.log("Errors:",error);
       return res.status(500).json({
            message:"FAILED TO LOAD"
        });
    }
    

});

app.listen(5128,()=>{
    console.log("server is running");
})