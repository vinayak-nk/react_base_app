import { useContext } from 'react';
import CartContext from '../../store/cartContext';
import ItemForm from './ItemForm';
import classes from './style.module.css';

const Item = ({price, description, name, id}) => {
  const cartCtx = useContext(CartContext)

  const handleCartAddAmount = (amount) => {
    cartCtx.addItem({
      id, name, price, amount, 
    })
  }

  return (
    <li key={id} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{`$${price.toFixed(2)}`}</span>
      </div>
      <div>
        <ItemForm id={id} onAddToCart={handleCartAddAmount}  />
      </div>
    </li>
  )
}

export default Item