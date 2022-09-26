import React,{useState, useEffect} from 'react'
import axios from 'axios'


function FetchingDataApi() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)
  const [buttonIdonClick, setButtonIdonClick] = useState(id)

 const handleFetch = ()=> {
    console.log(id)
    setButtonIdonClick(id)
  }
    useEffect(() => {
     axios
     .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(response => {
      console.log(response)
      setPosts(response.data)
     })
     .catch(err =>{
      console.log(err)
     })
    
    }, [buttonIdonClick])
    

  return (
    <div>
      <input type='text' value = {id} onChange= {e => setId(e.target.value)} />
      <button  onClick={handleFetch}>Fetch post</button>
      <h3>{posts.title}</h3>
        {/* <ul>
            {posts.map(post => (
                <li key={post.id}>{post.body}</li>
            ))}
        </ul> */}
    </div>
  )
}

export default FetchingDataApi