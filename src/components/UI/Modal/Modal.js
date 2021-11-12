

import React from 'react';
import classes from './Modal.module.css';


function Modal(props) {
    const { modal } = props;

    return (
        <div  className={classes.modal}>
            <div className={classes.content}>
                <p>{modal.content}</p>
                <button onClick={modal.ok}>SI</button>
                <button onClick={modal.notOk}>Annulla</button>
            </div>
        </div>
    )
};

export default Modal;