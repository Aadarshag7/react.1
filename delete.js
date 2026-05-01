const express=require("express");
const connectDB=require("./db");
const Note=require("./models/note");
connectDB();
const app=express();
app.delete("/notes/delete/:id",async(req,res)=>{
    try{
    const newNote=Note.findByIdAndDelete(
        req.params.id
    );

    if (!newNote){
        res.status(404).json({
            message:"no found"
        });
    }

    res.status(200).json({
        message:"successful",
        note:newNote
    });

}catch(error){
    console.log("error:",error);
    res.status(500).json({
        message:"error found"

    });
}

});