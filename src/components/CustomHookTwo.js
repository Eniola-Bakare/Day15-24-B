import React,{useState} from 'react'
import useCustomHook from '../useCustomHook'

function CustomHookTwo() {
    const[count, increase, decrease, reset] = useCustomHook(0)
  return (
    <div>
        <h2>Count = {count}</h2>
    <button onClick={increase}>Addition</button>
    <button onClick={ decrease}>Subtraction</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHookTwo