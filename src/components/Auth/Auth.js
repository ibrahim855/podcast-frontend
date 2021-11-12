import React, { useState } from 'react';
import classes from './Auth.module.css';

import { AnimatePresence } from 'framer-motion';

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
      <AnimatePresence>
        {isLoginMode && <Login changeMode={handleChangeMode} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoginMode && <Register changeMode={handleChangeMode} />}
      </AnimatePresence>
    </div>
  );
};

export default Auth;
