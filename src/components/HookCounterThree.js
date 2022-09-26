import React,{useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'' , lastName:''})
  return (
    <div>
        <input type= 'text'
        value = {name.firstName}
        onChange = {e => setName({...name, firstName: e.target.value})}
        />
        <input type='text'
        value = {name.lastName}
        onChange = {e => setName({...name, lastName: e.target.value})}
        />

        <h3>Your name is {name.firstName} {name.lastName}</h3>
        <h4>{JSON.stringify(name)}</h4>
    </div>
  )
}

export default HookCounterThree