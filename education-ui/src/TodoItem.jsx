export default function TodoItem({todo,index,deletes,toggle}){
return(
    <li
     onClick={()=>toggle(index)}
    style={{textDecoration:todo.completed?
        "line-through":"none",
        cursor:"pointer"
    }}
>    
    {todo.text}
    <button onClick={(e)=>{e.stopPropagation();
        
        
        delete(index)}}>Delete</button>
    </li>
);
}