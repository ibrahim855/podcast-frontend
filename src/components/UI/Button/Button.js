import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const { content, type } = props;
    
  return (
    <button className={classes.btn} type={type}>
      {content}
    </button>
  );
};

export default Button;
