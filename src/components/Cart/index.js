import { useContext } from 'react'
import CartContext from '../../store/cartContext'
import CartItem from './CartItem'
import Modal from '../UI/Modal'
import classes from './style.module.css'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totolAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        cartCtx.items.map((item) => (
          <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))
      }
    </ul>
  )
  return (
    <Modal toggleCartDisplay={props.toggleCartDisplay}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>{totolAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.toggleCartDisplay} >Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
