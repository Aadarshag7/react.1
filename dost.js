const express=require("express");
const app=express();
const note=require("./models/note");
app.use(express.json());
const connectDB=require("./db");
connectDB(); 
app.post("/note",async(req,res)=>{
    try{
        
    const{title,content}=req.body;
    const newNote=new note({
        title,
        content
    });

   await newNote.save();

   res.status(201).json({
    message:"Note added",
    note:newNote
   });
} catch(error){
    console.log("FULL ERROR:", error); 
    res.status(500).json({
        error:"something went wrong"
    });
}

});

app.listen(5007,()=>{
    console.log("hello ag");
});