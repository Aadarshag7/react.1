export default function TodoItem({todo,index,deletes,toggle}){
    // if (!todo) return null;
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
        deletes(index);
        }}>Delete</button>
    </li>
);
}