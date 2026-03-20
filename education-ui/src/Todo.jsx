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

    const toggle=(indexToToggle)=>{
        const newToggle=todos.map((todo,index)=>{
            if(index===indexToToggle){
                return{...todo,completed:!todo.completed};
            }
            return todo;
        });
        setTodo(newToggle);
        
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
                {todos.map((todo,index)=>(<li key={index}
                onClick={()=>toggle(index)}
                 style={{textDecoration:todo.completed?"line-through":"none", cursor:"pointer"}}>{todo.text}
                <button onClick={()=>deletes(index)}>Delete</button> </li>))}
               
                
            </ul>
            
            )};
        </div>
    );
}