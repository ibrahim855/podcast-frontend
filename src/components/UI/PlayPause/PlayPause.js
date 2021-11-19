import React, {useEffect} from 'react';
import classes from './PlayPause.module.css';

// import { motion, AnimatePresence } from 'framer-motion';

function PlayPause(props) {
    const { play, hide} = props;
    const { paused } = props;


    useEffect(() =>  {
        const timeout = setTimeout(() => {
            hide();
            clearTimeout(timeout);
        }, 2000);
        return () => {
            if(timeout) {
                clearTimeout(timeout);
            };
        }
    }, [hide]);



    return (
    // <motion.div onClick={play} 
    //         initial={{opacity:0, width: 10, height:10}}
    //         animate={{opacity: 1, width:80, height:80}}
    //         className={classes.circle}>

    //         </motion.div>
    <React.Fragment>
        {/* <AnimatePresence> */}
        { !paused && <svg 
                    // initial={{opacity:0, width:10,height:10}}
                    // animate={{opacity:1, width:70, height:70}}
                    // exit={{opacity:0, width:10, height:10}}
                    className={classes.circle} onClick={play} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="70" height="70"><g id="_01_align_center" data-name="01 align center"><path d="M19.765,9.458,4.98.019v24l14.779-9.473a3.007,3.007,0,0,0,.006-5.088Zm-1.08,3.395-11.7,7.5V3.677l11.707,7.474a1,1,0,0,1-.007,1.7Z"/></g></svg> }
        {/* </AnimatePresence> */}
       
        {/* <AnimatePresence> */}
            {   paused && <svg  
                    //  initial={{opacity:0, width:10,height:10}}
                    // animate={{opacity:1, width:70, height:70}}
                    // exit={{opacity:0, width:10, height:10}}
                    className={classes.circle} onClick={play} id="Layer_1" height="80" viewBox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m19 24h-14a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1 -5 5zm-14-22a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm6 10a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-5-5a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm-10 10a1 1 0 1 0 1-1 1 1 0 0 0 -1 1zm10 0a1 1 0 1 0 1-1 1 1 0 0 0 -1 1z"/></svg>
                    
            }   
        {/* </AnimatePresence> */}
    </React.Fragment>
            )

}

export default PlayPause;