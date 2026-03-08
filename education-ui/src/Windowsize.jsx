import { useEffect,useState} from "react";
export default function Windowsize(){
    const[size,setSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

   useEffect(()=>{
    const handleResize=()=>{
        setSize({
            width:window.innerWidth,
            height:window.innerHeight
        });
    }; 

    window.addEventListener("resize",handleResize);
    return()=>{window.removeEventListener("resize",handleResize);
    };

   },[]);
   
   return(
    <div>
        <h2>Width:{size.width}</h2>
        <h2>Height:{size.height}</h2>
    </div>
   );
}