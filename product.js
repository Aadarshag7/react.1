const express=require("express");
const app=express();
const Product=require("./models/product");
const connectDB=require("./db");
const cors=require("cors");
connectDB();
app.use(express.json());
app.use(cors({
    origin:"http://localhost/5173",
    credentials:true
}));
app.post("/store",async(req,res)=>{
    try{
    const produc=await Product.create(req.body);
    res.status(200).json({
        message:"Created succesffuly"
    });
    }catch(error){
        console.log("Errors:",error)
        res.status(500).json({
            message:"server error"
        });


    }
    });

app.listen(5117,()=>{
    console.log("welcome");
});