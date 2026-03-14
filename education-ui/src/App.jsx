import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar';
import Footer from './footer';
import Hero from './Hero';
import Zero from './Zero';
import Counter from './Counter';
import Stopwatch from './Stopwatch';
import Welcome from './Welcome';
import Windowsize from './Windowsize';
import Keypress from './Keypress';
import Users from './Users';
import Form from './Form';
import Todo from './Todo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      
      <h1>Hello React</h1>
      <button onClick={()=>setCount(count+1)}>
        Count is {count}
      </button>
      <Zero/>
      <Hero name="Aadarsh" age={24} />
      
      <Footer/>
      <Counter/>
      <Todo/>
      <Form/>
      <div style={{border:"2px solid gray", padding:"10px", marginBottom:"30px"}}>
        <h1>Stopwatch1</h1>
      <Stopwatch/>
      </div>
      <div style={{border:"2px solid blue", marginBottom:"10px"}}>
        <h1>Stopwatch2</h1>
      <Stopwatch initial={10}/>
      </div>
      <Stopwatch initial={20}/>
      <Welcome/>
      <Windowsize/>
      <Keypress/>
      <Users/>

    </>
  );
}


export default App;
