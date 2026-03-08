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
      <Stopwatch/>
      <Welcome/>
      <Windowsize/>

    </>
  );
}


export default App;
