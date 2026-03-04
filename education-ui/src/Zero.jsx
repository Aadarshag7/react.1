
import { useState } from "react";
function Zero(){
    const[count,setCount]=useState(0);

    return (
        <>
        <h3>Hello</h3>
        <button onClick={()=>
            setCount(count+1)}>
                Increase
            </button>
            <h3>loL</h3>
            </>
    );
}

export default Zero;