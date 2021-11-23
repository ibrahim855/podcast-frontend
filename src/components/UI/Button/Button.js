import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const { content, type } = props;
  const { loading, clicked } = props;



  return (
    <button onClick={clicked}
      className={`${classes.btn} ${loading ? classes.loading : ''}`}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
