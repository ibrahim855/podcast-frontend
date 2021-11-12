import React from 'react';
import classes from './Podcast.module.css';


//REACT ROUTER DOM
import { Link } from 'react-router-dom';

//REDUX STUFF 
import { useSelector, useDispatch } from 'react-redux';
import { removePodcast } from '../../../../context/podcast/podcast-actions';
//UTILITY FUNCTIIONS
import { howMuchTimeAgo } from '../../../../utility/format.date';


function Podcast(props) {
  const { podcast } = props;
  const timePassed = howMuchTimeAgo(+podcast.date); 
  const token = useSelector(state => state.authentication.token);
  const username = useSelector(state => state.authentication.username);
  const dispatch = useDispatch();  
  
  const onRemovePodcast = () => {
    dispatch(removePodcast(podcast.podcastId, token));
  };

  
  return (
    <div className={classes.podcast}>
      <h3>{podcast.author}</h3>
      <p>{podcast.description}</p>
      <p className={classes.timeAgo}>{timePassed}</p>
      <Link className={classes.link} to={`/podcasts/listen/${podcast.podcastId}`}>Ascolta</Link>
    
     { username === podcast.author &&  <p onClick={onRemovePodcast} className={classes.remove}>Remove</p>}
    </div>
  );
}

export default Podcast;
