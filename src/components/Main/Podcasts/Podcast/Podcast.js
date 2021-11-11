import React from 'react';
import classes from './Podcast.module.css';

import { Link } from 'react-router-dom';


function Podcast(props) {
    const { podcast } = props;
    
    return  <div>
                <h3>{podcast.author}</h3>
{                <Link to={`/podcasts/listen/${podcast.podcastId}`}>Ascolta</Link>
}            </div>
}

export default Podcast;