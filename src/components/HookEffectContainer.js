import React,{useState} from 'react'
import HookuseEffect from './HookuseEffect'

function HookEffectContainer() {
    const [display, setdisplay] = useState(true)


  return (
    <div>
        <button onClick={() => setdisplay(!display)}>Toggle Display</button>
        {display && <HookuseEffect />}
    </div>
  )
}

export default HookEffectContainer