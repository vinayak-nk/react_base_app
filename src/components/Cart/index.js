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
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>35</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  )
}

export default Cart
