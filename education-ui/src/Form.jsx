import { useState } from "react";
export default function Form(){


const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[age,setAge]=useState("");

return(
    <div>
        <form>
            <input type="text" value={name} placeholder="Name"
            onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type="email" value={email} placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="number" value={age} placeholder="AGE"
            onChange={(e)=>setAge(e.target.value)}/>
        </form>
        <h1>{name}</h1>
        <p>{email}</p>
        <h2>{age}</h2>
    </div>

    
);
}