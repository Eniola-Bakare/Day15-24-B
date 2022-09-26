import {useState} from 'react'

function useCustomHook() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    const decrease = ()=> {
        setCount(count -1)
    }
    const increase = ()=> {
        setCount(count + 1)
    }
    const reset = () =>{
        setCount(count - 1)
    }
    // return [count, increase, decrease, reset]

    // for usernameinput field
    const binders = {
        value,
        onChange:  e => {
            setValue(e.target.value)
        }
    }
    return [value, binders]
}

export default useCustomHook