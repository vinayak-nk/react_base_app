import classes from './style.module.css';

const Card = (props) => 
  <div className={classes.card}>
    {props.children}
  </div>


export default Card