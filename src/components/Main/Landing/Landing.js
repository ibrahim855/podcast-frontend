import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Landing.module.css';

import Podcaster from '../../../assets/podcaster.png';

function Landing() {
    return  <div className={classes.landingContainer}>
                <h1>Ascolta podcast qui su qualsiasi topic.</h1>
                <img  height="200" width="200" src={Podcaster} alt="nice" />
                <Link to="/podcasts">Podcasts</Link>
            </div>
}

export default Landing;