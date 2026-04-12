export default function Dashboard({notes,weather}){
    return (
        <div>
         <h1>Welcome to Dashboard</h1>
    {notes.length>0?(
        <div>
            <h2>Latest Note</h2>
            <p><strong>{notes[notes.length-1].title}</strong></p>
            <p>{notes[notes.length-1].content}</p>
        </div>
    ):(
        <p>No Item</p>
    )}

</div>

);

}