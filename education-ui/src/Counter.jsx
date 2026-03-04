
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
function Counter(){
const[count,setCount]=useState(0);
const intervalRef=useRef(null);
useEffect(()=>{
     intervalRef.current =setInterval(()=>{
        setCount(prev=>prev+1);
    },1000);
    return ()=>clearInterval(intervalRef.current);
},[]);
const stopCounter=()=>{
    clearInterval(intervalRef.current);
};

return(
    <div>
     <h1>{count}</h1>
     <button onClick={stopCounter} >Stop</button>
  </div>);

}

export default Counter;
