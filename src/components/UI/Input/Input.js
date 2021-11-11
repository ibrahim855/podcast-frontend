
import React from 'react';

import classes from './Input.module.css';


const Input = (props) => {

    const { type, content, id} = props;
    const { changed } = props;

    

    return (
        <div className={classes.inputContainer}>
           <label htmlFor={id}>{content}</label>
           <input onChange={changed} type={type} name={id} />
        </div>
    );
}

export default Input;