import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    if (count <= 0) return;
    setCount(count - 1)
  }
  return (
    <div className='wrap'>
      <p>현재 카운트 : {count}</p>
      <div>
        <button onClick={increaseCount}> + </button>
        <button onClick={decreaseCount}> - </button>
      </div>
    </div>
  )
}

export default App