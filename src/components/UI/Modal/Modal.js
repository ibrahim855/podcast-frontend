import React from "react";
import classes from "./Modal.module.css";


//COMPONENTS 
import Button from '../Button/Button';


function Modal(props) {
  const { modal } = props;

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
          <p>{modal.content}</p>
          <div className={classes.controls}>
          <Button type="button" content="SI" clicked={modal.ok} />
          <Button type="button" content="ANNULLA" clicked={modal.notOk} />
        </div>
      </div>
    </div>
  );
}

export default Modal;