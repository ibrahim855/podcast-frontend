import React from 'react';

import classes from './DurationBar.module.css';




function DurationBar(props) {


    const { percentage } = props;
    const {mapPercToCurrTime} = props;


    const handleIt = (e) => {
      e.stopPropagation();
      const perc = Math.floor((e.clientX/ window.innerWidth) * 100);
      mapPercToCurrTime(perc);
    };
    

    return <React.Fragment>
             <div style={{width: percentage + "%",
                      // transition: "all 3s ease"
                   }}
                   className={classes.barPodcast}
              >
             </div>
          <div className={classes.barBackground}  onClick={handleIt}>

          </div>
        </React.Fragment>
}

export default DurationBar;