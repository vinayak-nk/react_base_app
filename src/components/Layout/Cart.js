import { useContext } from 'react'
import CartContext from '../../store/cartContext'
import CartIcon from '../Cart/CartIcon'
import classes from './Style.module.css'

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext)

  const count = cartCtx.items.reduce(
    (currentNumber, item) => {return currentNumber + item.amount},
    0, // starting value
  )
  // reduce((curVal, item)=> {}, initialVal)
  return (
    <button className={classes.button} onClick={props.toggleCartDisplay}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {count}
      </span>
    </button>
  )
}

export default HeaderCart