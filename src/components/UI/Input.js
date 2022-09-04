import classes from './style.module.css';

const Input = (props) => {
  const { label, id, input } = props
  return (
    <div className={classes.input}>
      <label htmlFor={id} >{label}</label>
      <input key={id} id={id} {...input} />
    </div>
  )
}

export default Input
