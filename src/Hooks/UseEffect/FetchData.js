import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchData() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setPosts(response.data))
    .catch((error) => setPosts(error))
  }, [])

  console.log("posts=", posts)

  return (
    <div>
      <ul>
        {posts.length > 0 && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default FetchData