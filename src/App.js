import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const incrCount = ()=>{
    // console.log("Adding number")
    setCount(count+1)
  }
  const decrCount = ()=>{
    // console.log("decrement number")
    setCount(count-1)
  }
  console.log(count)
  return (
   <div className='countUI'>
      <button className='incrBtn' onClick= {incrCount}>+</button>
      <h1>{count}</h1>
      <button className='decrBtn' onClick= {decrCount}>-</button>
   </div>
  );
}

export default App;
