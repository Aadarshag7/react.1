import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
function Stopwatch(){
    const[count,setCount]=useState(0);
    const intervalRef=useRef(null);
    const start=()=>{
    if(intervalRef.current)return;
    intervalRef.current=setInterval(()=>{
        setCount(prev=>prev+1);
    },1000);
    };

   const stop=()=>{
    clearInterval(intervalRef.current);
   } ;

   const reset=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setCount(0);
   } ;

 useEffect(()=>{
 return()=>clearInterval(intervalRef.current);
 },[]);

 const formatTime=(seconds)=>{
  const mins=Math.floor(seconds/60);
  const secs=seconds%60;
  const formattedMins= mins<10? `0${mins}`:mins;
  const formattedSecs=secs<10? `0${secs}`:secs;
  return `${formattedMins}:${formattedSecs}`;

 };

  return(
    <div>
        <h1>{formatTime(count)}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>        

    </div>
  ) ; 

}

export default Stopwatch;