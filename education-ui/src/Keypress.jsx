import { useEffect,useState } from "react";
export default function Keypress(){
  const[key,handlekey]=useState("");
  useEffect(()=>{
    const handlekeys=(event)=>{
        handlekey(event.key);
    };
     window.addEventListener("keydown",handlekeys);

     return()=>window.removeEventListener("keydown",handlekeys);
  },[]);

  return(
    <h1>{key}</h1>
  );
}