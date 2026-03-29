import { useState } from "react";
export default function Note(){
const[title,setTitle]=useState("");
const[content,setContent]=useState("");
const[note,setNote]=useState([]);
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



}