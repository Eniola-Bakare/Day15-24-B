import Reac,{useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter: 25
}
const reducer = (state, action) =>{
    switch (action.type) {
        case 'increase':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrease':
            return {...state, firstCounter: state.firstCounter - action.value}
            case 'increaseFive':
                return {...state, secondCounter: state.secondCounter + action.value}
            case 'decreaseFive':
                return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function UseReducerTwo() {
   const [count, dispatch] = useReducer(reducer, initialState)
   const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
        <div>FirstCount - {count.firstCounter}</div>
        <div>SecondCount - {countTwo.secondCounter}</div>
        <button onClick={() => dispatch({type: 'increase', value: 1})}>Increase</button>
        <button onClick={() => dispatch({type: 'decrease', value: 1})}>Decrease</button>
        <div>
            <button onClick={() => dispatchTwo({type: 'increaseFive', value: 5})}>Increase Five</button>
            <button onClick={() => dispatchTwo({type: 'decreaseFive', value: 5})}>Decrease Five</button>
        </div>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducerTwo