import Modal from '../UI/Modal'
import classes from './style.module.css'

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        [{id: 'c1', name: 'Test', amount: 2, price: 12.99}].map((item) => <li>{item.name}</li>)
      }
    </ul>
  )
  return (
    <Modal toggleCartDisplay={props.toggleCartDisplay}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.toggleCartDisplay} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
