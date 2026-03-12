import { useState,useEffect } from "react";

export default function Users(){
    const[users,setUser]=useState([]);
    const[loading,setLoading]=useState(true);
    const[search,setSearch]=useState("");
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
   const filterUser=users.filter((user)=>
         user.name.toLowerCase().includes(search.toLowerCase())); 

if (loading){
    return (<h2>Loading..</h2>);
}

return(
    <div>
        <input type="text" value={search} placeholder="Search"
        onChange={(e)=>setSearch(e.target.value)}
        /> 

        {filterUser.map((user)=>(
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>

        ))}

        


    </div>


);

}
