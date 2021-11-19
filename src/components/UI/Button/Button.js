import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const { content, type } = props;
  const { loading } = props;

  return (
    <button
      className={`${classes.btn} ${loading ? classes.loading : ''}`}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
