const express=require("express");
const app= express();
app.use(express.json());
let notes=[];
app.post("/notes/post",(req,res)=>{
    const newNote=req.body;
    notes.push(newNote);

    res.json({message:"note added",
        data:newNote
    });
});

app.delete("/delete:idToDelete",(req,res)=>{
    const id=parseInt(req.params.idToDelete);
    const updatedNotes= notes.filter(note=>note.id!==idToDelete);

    notes.length=0;
    notes.push(...updateNotes);
    

});

app.listen(5002,()=>{
    console.log("start");
});