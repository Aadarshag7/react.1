const express=require("express");
const cors=require("cors");
const upload=require("./multer");
const db=require("./datas");
const app=express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true

}));
app.post("/sttore",upload.single("image"),async(req,res)=>{
    try{
    const{name,price}=req.body;
    const image=req.file.path;

    await db.query("INSERT INTO prod(name,price,image) VALUES(?,?,?)",[
    name,price,image
    ]);

    return res.status(201).json({
        message:"created"
    });
}catch(error){
console.log("Errors:",error);
}

});

app.listen(5062,()=>{
    console.log("welcome");
});