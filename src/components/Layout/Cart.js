import CartIcon from '../Cart/CartIcon'
import classes from './Style.module.css'

const HeaderCart = (props) => {
  return (
    <button className={classes.button} onClick={props.toggleCartDisplay}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        4
      </span>
    </button>
  )
}

export default HeaderCart