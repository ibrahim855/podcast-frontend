import React from 'react';

import classes from './Login.module.css';

//REDUX STUFF
import { loginAction } from '../../../context/auth/auth-actions';
import { useDispatch } from 'react-redux';

//FRAMER MOTION STUFF
// import { motion } from 'framer-motion';

//CUSTOM HOOKS
import useInput from '../../../hooks/use-input';
import useLoading from '../../../hooks/use-loading';



//COMPONENTS
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const Login = (props) => {
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
  const { loading, onLoadingChanged } = useLoading();


  const submitHandler = async (e) => {
    e.preventDefault();
    if (!usernameValid || !passwordValid) {
      return;
    }
    onLoadingChanged(true);
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      onLoadingChanged(false);
      dispatch(loginAction(usernameValue, passwordValue));
    }, 4000);
  };

  const goToRegister = () => {
    changeMode(false);
  };

  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      className={classes.loginContainer}
    >
      <form onSubmit={submitHandler}>
        <h1 className={classes.titleForm}>Accesso</h1>
          
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

        <Button content="Accedi" type="submit" loading={loading} />
        <p className={classes.message}>
          Non hai un'account? <u onClick={goToRegister}>registrati</u> ora.
        </p>
      </form>
    </div>
  );
};

export default Login;
