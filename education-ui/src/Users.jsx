import { useState,useEffect } from "react";

export default function Users(){
    const[users,setUser]=useState([]);
    const[loading,setLoading]=useState(true);
useEffect(()=>{
    const fetchUser=async()=>{
        try{
            const res=await fetch("https://jsonplaceholder.typicode.com/users");
            const data=await res.json();
            setUser(data);
        }catch(err){
            console.error("Error fetching users:",err);
        } finally{ 
            setLoading(false);
        }
        };


    fetchUser();
},[]);

if (loading){
    return (<h2>Loading..</h2>);
}

return(
    <div>
        {users.map((user)=>(
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>

        ))}
    </div>
);

}
