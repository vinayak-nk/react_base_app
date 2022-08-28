import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
    switch(action.type) {
        case 'USER_INPUT':
            return { value: action.payload, isValid: action.payload.includes('@') }
        case 'INPUT_BLUR':
            return { value: state.value, isValid: state.value.includes('@')}
        default:
            return { value: '', isValid: false }

    }
}

const passwordReducer = (state, action) => {
    switch(action.type) {
        case 'USER_INPUT_PASSWORD':
            return { value: action.payload, isValid: action.payload.trim().length > 4 }
        case 'INPUT_BLUR_PASSWORD':
            return { value: state.value, isValid: state.value.trim().length > 4 }
        default: return state
    }
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const initialEmailState = { value: '', isValid: undefined }
  const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmailState)
  
  const initialPasswordState = { value: '', isValid: undefined }
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, initialPasswordState)

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState
  // DEBOUNCING
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Checking form validity')
        // setFormIsValid(emailState.value.includes('@') && passwordState.value.trim().length > 4)
        setFormIsValid(emailIsValid, passwordIsValid)
    }, 1000)

    // CLEAN UP FN: not run @first side effect execution,
    // runs in subsequest side effects and un mount
    return () => {
      console.log('CLEAN UP FN')
      clearTimeout(timer)
    }
  }, 
  [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(emailState.value);
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value })

    // setFormIsValid(
    //   emailState.value.includes('@') && passwordState.value.trim().length > 4
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'USER_INPUT_PASSWORD', payload: event.target.value })
    // setFormIsValid(
    //   passwordState.value.trim().length > 4 && emailState.value.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR_PASSWORD)' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
