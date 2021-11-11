import React from 'react';
import classes from './Podcast.module.css';


//REACT ROUTER DOM
import { Link } from 'react-router-dom';

//UTILITY FUNCTIIONS
import { howMuchTimeAgo } from '../../../../utility/format.date';


function Podcast(props) {
  const { podcast } = props;
  const timePassed = howMuchTimeAgo(+podcast.date); 
  return (
    <div className={classes.podcast}>
      <h3>{podcast.author}</h3>
      <p>{podcast.description}</p>
      <p className={classes.timeAgo}>{timePassed}</p>
      <Link className={classes.link} to={`/podcasts/listen/${podcast.podcastId}`}>Ascolta</Link>
    </div>
  );
}

export default Podcast;
