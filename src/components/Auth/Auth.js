import React, { useState } from 'react';
import classes from './Auth.module.css';

// import { AnimatePresence } from 'framer-motion';

//COMPONENTS
import Login from './Login/Login';
import Register from './Register/Register';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleChangeMode = (value) => {
    setIsLoginMode(value);
  };

  return (
    <div className={classes.authContainer}>
      {isLoginMode && <Login changeMode={handleChangeMode} />}

      {!isLoginMode && <Register changeMode={handleChangeMode} />}
    </div>
  );
};

export default Auth;
