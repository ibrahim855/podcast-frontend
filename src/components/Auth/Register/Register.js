import React, { useState } from 'react';

import classes from './Register.module.css';

//REDUX STUFF
import { registerAction } from '../../../context/auth/auth-actions';
import { useDispatch } from 'react-redux';

//CUSTOM HOOKS
import useInput from '../../../hooks/use-input';

//COMPONENTS
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';




const Register = (props) => {
  
  const {
    value: usernameValue,
    isValid: usernameValid,
    inputChange: usernameChanged,
  } = useInput((value) => value.trim().length > 5);


  const {
    value: passwordValue,
    isValid: passwordValid,
    inputChange: passwordChanged,
  } = useInput((value) => value.trim().length > 5);
  

  const { changeMode } = props;


  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!usernameValid || !passwordValid) {
      return;
    }
    dispatch(registerAction(usernameValue, passwordValue));
  };

  const goToLogin = () => {
      changeMode(true);
  }


  
  return (
    <div className={classes.loginContainer}>
      <form onSubmit={submitHandler}>

        <Input
          type="text"
          content="Nome utente"
          id="username"
          changed={usernameChanged}
        />

        <Input
          type="password"
          content="password"
          id="password"
          changed={passwordChanged}
        />

        <Button content="Registrati" type="submit" />
        <p>Hai già un account? <u onClick={goToLogin}> accedi</u> ora.</p>
      </form>
    </div>
  );
  
};

export default Register;
