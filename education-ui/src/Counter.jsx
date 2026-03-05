
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
function Counter(){
const[count,setCount]=useState(0);
const intervalRef=useRef(null);
const startCounter=()=>{
    if(intervalRef.current)return;


     intervalRef.current =setInterval(()=>{
        setCount(prev=>prev+1);
    },1000);
};
const stopCounter=()=>{
    clearInterval(intervalRef.current);
};

const resetCounter=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setCount(0);
};

return(
    <div>
     <h1>{count}</h1>
     <button onClick={stopCounter} >Stop</button>
     <button onClick={startCounter}>Start</button>
     <button onClick={resetCounter}>Reset</button>
  </div>);

}

export default Counter;
