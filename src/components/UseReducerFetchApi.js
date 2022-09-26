import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'

function UseReducerFetchApi() {

// using state hooks
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState('')
// const [post, setPost] = useState({})

//    useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//       setLoading(false)
//       setPost(response.data)
//       setError('')
//     })
//     .catch(error => {
//       setLoading(false)
//       setPost({})
//       setError('Something went wrong')
//     })
   
//    }, [])
   
  //  {/* Using reducer hooks */}
  const initialState = {
    loading: true,
    post: {},
    error: ''
  }
  const reducer = (state, action)=> {
    switch(action.type){
      case 'Fetch_Error':
        return {
          loading: false,
          post: {},
          error: 'Something Went wrong'
        }

        case 'Fetch_Success':
        return {
          loading: true,
          post: action.payload,
          error: ''
        }
    }
  }

     useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      dispatch({type: 'Fetch_Sucess', payload: response.data})
    })
    .catch(error => {
      dispatch({type: 'Fetch_Error'})
    })
   
   }, [])
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    
    <div>
      {/* Using Statehooks */}
      {/* {loading ? 'Loading' : post.title}
      {error ? error :null} */}

      {/* Using reducer hooks */}
      
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error :null}
    </div>
  )
}

export default UseReducerFetchApi