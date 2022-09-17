const HoverCounter = ({ count, IncrementCounter }) => 
  <button onMouseOver={IncrementCounter} >Hover to Increment count: {count}</button>

export default HoverCounter
