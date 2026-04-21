import { useState,useEffect } from "react";

export default function Note({notes,setNote}){
const[title,setTitle]=useState("");
const[content,setContent]=useState("");
// const[notes,setNote]=useState([]);
const[search,SetSearch]=useState("");

useEffect(()=>{
    fetch("http://localhost:5005")
    .then(res=>res.json())
    .then(data=>setNote(data))
    .catch(err=>console.log(err));
},[]);
const add=async()=>{
    if(title.trim()===""||content.trim()==="")return; 
    const newNote={
        id:Date.now(),
        title:title.trim(),
        content:content.trim()
    };
    await fetch("http://localhost:5002/notes/post",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(newNote)
});
    
    setNote([...notes,newNote]);
    setTitle("");
    setContent("");
}
const del=async(idToDelete)=>{
    await fetch(`http://localhost:5002/delete/{idToDelete}`,{
        method:"DELETE",

        
    })


    const dels=notes.filter(note=>note.
        id!==idToDelete);
    setNote(dels);
}

const filternote=
notes.filter(note=> note.title.toLowerCase().includes(search.toLowerCase())||
note.content.toLowerCase().includes(search.toLowerCase())
);




return(
<div style={{margin:"50px"}}>
    <input type="text" value={search} placeholder="type search here"
onChange={(e)=>SetSearch(e.target.value)}
/>

    <input type="text" value={title} placeholder="Title"
    onChange={(e)=>setTitle(e.target.value)}
onKeyDown={(e)=>{
    if (e.key==="Enter")
        add();
    }}    
/>
<input type="text" value={content} placeholder="content"
onChange={(e)=>setContent(e.target.value)}
onKeyDown={(e)=>{
    if(e.key==="Enter")
        add();
}}
/>

<button onClick={add}>ADD</button>


{filternote.length===0?(
<p>No Title and COntent</p>
):(
    <ul>
        {filternote.map(note=>( 
            <li key={note.id}><strong>{note.title}</strong>:{note.content}
            <button onClick={()=>del(note.id)}>Delete</button>   
            </li>

       ))}
    </ul>
)}


</div>

);



}