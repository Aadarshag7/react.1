import { useState } from "react";
export default function Note(){
const[title,setTitle]=useState("");
const[content,setContent]=useState("");
const[notes,setNote]=useState([]);
const add=()=>{
    if(title.trim()===""||content.trim()==="")return; 
    const newNote={
        title:title,
        content:content
    }
    setNote([...note,newNote]);
    setTitle("");
    setNote("");
}


return(
<div style={{margin:"50px"}}>
    <input type="text" value="{title}" placeholder="Title"
    onChange={(e)=>setTitle(e.target.value)}
onKeyDown={(e)=>{
    if (e.key==="Enter")
        add();
    }}    
/>
<input type="text" value="content" placeholder="content"
onChange={(e)=>setContent(e.target.value)}
onKeyDown={(e)=>{
    if(e.key="Enter")
        add();
}}
/>
<button onClick={add}>ADD</button>
{notes.length===0?(
<p>No Content & Title</p>
):(
    <ul></ul>
)}

</div>

);



}