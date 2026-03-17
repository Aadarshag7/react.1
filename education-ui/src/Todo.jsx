import { useState } from "react";
export default function Todo(){
    const[task,setTask]=useState("");
    const[todos,setTodo]=useState([]);
    const addButton=()=>{
    if(task==="")return;
    setTodo([...todos,task]);
    setTask("");
    };
    const deletes=(indexTODelete)=>{
        const delTods =todos.filter((todo,index)=>index!==indexTODelete);
        setTodo(delTods);
    };

    }
    return (

        <div>
            <input type="text" value={task} placeholder="Write a task" 
            onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={addButton}> Add</button>
            <ul>
                {todos.map((todo,index)=>(<li key={index}>{todo}</li>))}
            </ul>
        </div>
    );
}