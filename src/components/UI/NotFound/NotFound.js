import React from 'react';
import classes from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';



function NotFound() {
    const navigate = useNavigate();

    
    const onGoBack = () => {
        navigate(-1);
        console.log("going back");
    };

    return <div className={classes["not-found-component"]}>
                <h2>Ops Pagina non trovata.</h2>

                <p>A quanto pare ti sei perso...</p>
                <p>Torna <u onClick={onGoBack}>indietro</u>.</p>
            </div>
};

export default NotFound;