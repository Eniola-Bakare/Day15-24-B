import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementByFive = ()=>{
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount +1)
        }
    }
  return (
    <div>
        Count: {count} 
        <button onClick={() => {setCount(initialCount)}}> Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}> increament</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}> Decreament</button>
        <button onClick={incrementByFive}> Add five</button>
    </div>
  )
}

export default HookCounterTwo