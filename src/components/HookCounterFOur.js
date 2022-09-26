import React,{useState} from 'react'

function HookCounterFOur() {
    const [items, setItems] = useState([])

    const addItem = () =>{
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() *100) + 2
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add an item</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
             ))}
        </ul>
    </div>
  )
}

export default HookCounterFOur