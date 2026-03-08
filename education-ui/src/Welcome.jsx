import { useEffect, useState } from "react";

export default function Welcome(){
    const[message,setMessage]=useState("loading");
    useEffect(()=>{
        const id=setTimeout(()=>{
            setMessage("hello");
        },3000);
        return()=>clearTimeout(id);
    },[]);

    return(
        <h1>{message}</h1>
    )
}

