import React,{useState, useEffect} from 'react'

function HookCounter() {
    // useState Hook
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // useEffect Hook
    useEffect(() => {
        console.log('Updatingggg- useeffect')
      document.title = `You clicked ${count} times`
    }, [count])
    

  return (
    <div>
        <input value = {name}  onChange = {e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter