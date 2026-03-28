import TodoItem from "./TodoItem";
export default function TodoList({todos,deletes,toggle}){
    // console.log(todos);
    return(
<ul>
    {todos.map((todo,index)=>(
        <TodoItem
        key={index}
        todo={todo}
        index={index} 
        deletes={deletes}
        toggle={toggle}
        />
    ))}

</ul>
    );
}