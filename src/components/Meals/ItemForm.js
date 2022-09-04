import { useRef, useState } from 'react'
import Input from '../UI/Input'
import classes from './style.module.css'

const ItemForm = (props) => {
  const amountInputRef = useRef()
  const [validForm, toggleFormValidation] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault()

    let enteredAmount = amountInputRef.current.value
    enteredAmount = parseInt(enteredAmount, 10) // converts string to number
    if (enteredAmount < 1 || enteredAmount > 5) {
      toggleFormValidation(false)
      return 
    }
    props.onAddToCart(enteredAmount)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount" id={`amount_${props.id}`} 
        input={{ type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }} 
      />
      <button>+ Add</button>
      {!validForm && <p>Please enter a valid amout (1-5).</p>}
    </form>
  )
}

export default ItemForm
