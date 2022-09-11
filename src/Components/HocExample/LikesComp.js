import HOC from '.'

const LikesComp = (props) => {
  console.log('LikesComp')
  return (
    <div style={{ display: 'flex' }}>
      <span>Likes: {props.count}</span>
      <button onClick={props.setCount}>Increment</button>
    </div>
  )
}

const EnhancedLikes = HOC(LikesComp, 10)

export default EnhancedLikes