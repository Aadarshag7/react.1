import {BrowserRouter,Routes,Route,NavLink}from "react-router-dom";
import Note from "./Note";
import Weather from "./Weather";

function Home(){
  return <h1>Welcome Home </h1>;
}

export default function App(){
return (
  <BrowserRouter>
  <nav>

    <NavLink to ="/">Home</NavLink>|{" "}
    <NavLink to="/note" style={({isActive})=>({color:isActive?"red":"blue",margin:"20px"})
  }>Notes</NavLink>|{" "}
    <NavLink to="/weather">Weather</NavLink>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/note" element={<Note/>}/>
    <Route path="/weather" element={<Weather/>}/>
  </Routes>

  </BrowserRouter>
);
}