import React from 'react';

import classes from './DurationBar.module.css';



function DurationBar(props) {
    const { percentage } = props;

    return <React.Fragment>
             <div style={{width: percentage + "%",
                      transition: "all 3s ease"}} className={classes.barPodcast}>
          </div>
          <div className={classes.barBackground}>

          </div>
        </React.Fragment>
}

export default DurationBar;