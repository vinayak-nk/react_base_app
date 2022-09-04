import { forwardRef } from 'react';
import classes from './style.module.css';

const Input = forwardRef((props, ref) => {
  const { label, id, input } = props
  return (
    <div className={classes.input}>
      <label htmlFor={id} >{label}</label>
      <input ref={ref} key={id} id={id} {...input} />
    </div>
  )
})

export default Input
