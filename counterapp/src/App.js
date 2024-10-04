import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function Counter() {

  const [count,setcount] = useState(0);

  return (
    <div style={{ textAlign: 'center',marginTop:'50px'}}>
      <h1>Counter App</h1>

      <h3>Count: {count}</h3>
      <button onClick={() => setcount(count+1)}>increament</button>
      <button style={{marginLeft:'15px'}} onClick={() => setcount(count-1)}>decrement</button>

      <button style={{marginLeft:"15px"}} onClick={() => setcount(0)}>Reset Counter</button>
    </div>
  );
}

export default Counter;
