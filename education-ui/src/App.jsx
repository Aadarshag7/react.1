import {BrowserRouter,Routes,Route,NavLink}from "react-router-dom";
import { useState } from "react";
import Note from "./Note";
import Weather from "./Weather";
import Dashboard from "./Dashboard";

function Home(){
  return <h1>Welcome Home </h1>;
}

export default function App(){
  const[notes,setNote]=useState([]);
  const[weather,setWeather]=useState(null);
return (
  <BrowserRouter>
  <nav style={{marginBottom:"1000px"}}>
    <NavLink to="/dashboard">Dashboard</NavLink>| {" "}
    <NavLink to ="/">Home</NavLink>|{" "}
    <NavLink to="/note" style={({isActive})=>({color:isActive?"red":"blue",margin:"20px"})}
  >Notes</NavLink>|{" "}
    <NavLink to="/weather">Weather</NavLink>|{" "}
    
  </nav>
  <div style={{marginTop:"20px"}}>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/note" element={<Note notes={notes} setNote={setNote}/>}/>
    <Route path="/weather" element={<Weather weather={weather} setWeather={setWeather}/>}/>
    <Route path="/dashboard" element={<Dashboard notes={notes} weather={weather}/>}/>
  </Routes>
  </div>

  </BrowserRouter>
);
}