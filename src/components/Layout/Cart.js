import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cartContext'
import CartIcon from '../Cart/CartIcon'
import classes from './Style.module.css'

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const count = items.reduce(
    (currentNumber, item) => {return currentNumber + item.amount},
    0, // starting value
  )
  // reduce((curVal, item)=> {}, initialVal)

  const [cartHighlighted, setBtnHighlight] = useState(false)
  const btnClasses = `${classes.button} ${cartHighlighted ? classes.bump : ''}`
  useEffect(() => {
    if (items.length === 0) return
    setBtnHighlight(true)
    const timer = setTimeout(() => {setBtnHighlight(false)}, 300); // to add bump class everytime item added to cart

    return () => {clearTimeout(timer)}
  }, [items])

  return (
    <button className={btnClasses} onClick={props.toggleCartDisplay}>
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