import { useState } from "react";
export default function Todo(){
    const[task,setTask]=useState("");
    const[todos,setTodo]=useState([]);
    const addButton=()=>{
    if(task==="")return;
    setTodo([...todos,{text:task,completed:false}]);
    setTask("");
    };
    const deletes=(indexToDelete)=>{
        const delTods =todos.filter((todo,index)=>index!==indexToDelete);
        setTodo(delTods);
    };
    return (

        <div>
            <input type="text" value={task} placeholder="Write a task" 
            onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={addButton}> Add</button>
            {todos.length===0?(
                <p>NO Item</p>
            ):(
            <ul>
                {todos.map((todo,index)=>(<li key={index}>{todo.text}<button onClick={()=>deletes(index)}>Delete</button> </li>))}
               
                
            </ul>
            )};
        </div>
    );
}