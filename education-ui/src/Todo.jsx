import { useState } from "react";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
export default function Todo(){
    const[task,setTask]=useState("");
    const[todos,setTodo]=useState([]);
    const addButton=()=>{
        
    if(task.trim==="")return;
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

        <div style={{maxWidth:"1000px", margin:"20px", paddingRight:"150px"}}>
            <input type="text" value={task} placeholder="Write a task" 
            onChange={(e)=>setTask(e.target.value)}
            onKeyDown={(e)=>{
            if(e.key==="Enter") addButton(); 
            }}
            />
            <button onClick={addButton}> Add</button>
            {todos.length===0?(
                <p>NO Item</p>
            ):(
           <TodoList
           todos={todos}
           deletes={deletes}
           toggle={toggle}
           />)}
        </div>
    );
}