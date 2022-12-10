import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: null,
  post: {}
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "TOGGLE_LOADING": 
      return { ...state, loading: !state.loading }
    case "SET_DATA": 
      return { ...state, post: action.payload, loading: false }
    case "SET_ERROR": return { ...state, error: action.payload, loading: false}
    default: return state
  }
}


const FetchData = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { loading, error, post } = state

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/3')
    .then((response) => {
      dispatch({ type: "TOGGLE_LOADING" })
      dispatch({ type: "SET_DATA", payload: response.data})
    })
    .catch((error) => {
      console.log(error.message)
      dispatch({ type: "TOGGLE_LOADING" })
      dispatch({ type: "SET_ERROR", payload: error.message})
    })
  }, [])

  return (
    <div>
      <p>useReducer and useEffect Example</p>
      {loading && <h4>Loading ...</h4>}
      {error ? (
      <p style={{ color: 'red' }} >{error}</p>
      ) : (
        <h3>{post.title}</h3>
      )}
    </div>
  )
}

export default FetchData