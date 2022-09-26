import React,{useState, useEffect} from 'react'

function HookuseEffect() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('use effecttttt')
      window.addEventListener('mousemove', logMousePosition)

      return () =>{
        window.removeEventListener('mousemove', logMousePosition)
      }
    }, [])
    

  return (
    <div>
        HookuseEffect: X - {x} Y -{y}
    </div>
  )
}

export default HookuseEffect