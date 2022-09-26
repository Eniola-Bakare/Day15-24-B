import React, { useState } from 'react'
import useCustomHook from './useCustomHook'

function UserNameCustomHook() {
    const [firstvalue, bindOne] = useCustomHook('')
    const [secondvalue, bindTwo] = useCustomHook('')
    const submit = () =>{
        alert(`Hello, and welcome to our page ${firstvalue} ${secondvalue}`)
    }
  return (
    <div>
        <form>
           <div>
                <label>First Name: </label>
                <input type= 'text'
                   {...bindOne}
                />
           </div>
           <div>
                <label>Last Name: </label>
                <input type= 'text'
                    {...bindTwo}
                />
           </div>
           <button onClick={submit}>Submit</button>
        </form>
    </div>
  )
}

export default UserNameCustomHook