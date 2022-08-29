import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../contextStore/authContext';

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

const Login = () => {
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

  const ctx = useContext(AuthContext)

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    if (formIsValid) ctx.onLogin(emailState.value, passwordState.value);
    else if (!emailIsValid) emailInputRef.current.focus();
    else passwordInputRef.current.focus();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}> */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
