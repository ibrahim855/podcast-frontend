import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const { type, content, id } = props;
  const { changed } = props;

  

  if (type === "textarea") {
    const { rows, cols } = props;
    return (
      <div className={classes.inputContainer}>
        <label htmlFor={id}>{content}</label>
        <textarea
          onChange={changed}
          name={id}
          rows={rows}
          columns={cols}
        ></textarea>
      </div>
    );
  }

  return (
    <div className={classes.inputContainer}>
      <label htmlFor={id}>{content}</label>
      <input onChange={changed} type={type} name={id} />
    </div>
  );
};

export default Input;
