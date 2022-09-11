import HOC from '.'

const CommentsComp = (props) => {
  console.log('CommentsComp')
  return (
    <div style={{ display: 'flex' }}>
      <span>Comments: {props.count}</span>
      <button onClick={props.setCount}>Increment</button>
    </div>
  )
}

const EnhancedComments = HOC(CommentsComp, 6)

export default EnhancedComments