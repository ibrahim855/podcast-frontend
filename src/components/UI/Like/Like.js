import React from 'react';

import classes from './Like.module.css';



const Like = (props) => {
    const { like } = props;
    const { handleLikeRequest }  = props;


    


    return <p onClick={handleLikeRequest} 
            className={`${classes.container}
             ${like ? classes.unlike : classes.like}`}>
            
            </p>
}

export default Like;