const express=require("express");
const app=express();
const connectDB=require("./db");
const Note=require("./models/note");
connectDB();
app.use(express.json());
app.put("/notes/update/:id",async(req,res)=>{
    try{
    const{title,content}=req.body;
    if(!title||!content){
        return res.status(400).json({
            message:"not found"
        });
    }
    const newNote=await Note.findByIdAndUpdate(
        req.params.id,
        {title,content},
        {new:true}

    );
    if (!newNote) {
    return res.status(404).json({
        error: "Note not found"
    });
}

    res.status(200).json({
        message:"Updated successfully",
        note:newNote,
    });
    

}catch(error){
    console.log("error:",error)
    res.status(500).json({
        error:"failed to update"
    });
    
}

});

app.listen(5010,()=>{
    console.log("hey");
})