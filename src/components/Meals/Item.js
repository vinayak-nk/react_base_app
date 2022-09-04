import ItemForm from './ItemForm';
import classes from './style.module.css';

const Item = ({price, description, name, key, id}) => (
  <li key={key} className={classes.meal}>
    <div>
      <h3>{name}</h3>
      <p className={classes.description}>{description}</p>
      <span className={classes.price}>{`$${price.toFixed(2)}`}</span>
    </div>
    <div>
      <ItemForm id={id} />
    </div>
  </li>
)

export default Item