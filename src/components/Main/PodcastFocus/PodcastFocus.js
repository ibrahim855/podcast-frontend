import React, { useRef, useState, useEffect, useCallback } from 'react';
import classes from './PodcastFocus.module.css';
import { useParams } from 'react-router-dom';

import { URL } from '../../../utility/baseURL';


//REDUX STUFF
import { useDispatch, useSelector } from 'react-redux';
import {likeUnlikePodcast} from '../../../context/podcast/podcast-actions';

//CUSTOM HOOKS
import useDurationBar from '../../../hooks/use-durationbar';
import useTextDuration from '../../../hooks/use-textduration';
import useLike from '../../../hooks/use-like';



//COMPONENTS
import PlayPause from '../../UI/PlayPause/PlayPause';
import DurationBar from '../../UI/DurationBar/DurationBar';
import Audio from '../../UI/Audio/Audio';


let referenceAudio = null;


function PodcastFocus() {
  const username = useSelector(state => state.authentication.username);
  const token = useSelector(state => state.authentication.token);

  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const params = useParams();


  const { percentage, changedPlayBack, duration, currentTime } = useDurationBar();

  const {
    durationString,
    currentTimeString,
    changeDurationString,
    changeCurrentTimeString
  } = useTextDuration();
  const { podcastId } = params;
  const { like, onToggleLike } = useLike(username, podcastId);


  function makeIt() {
    
  }

  if(!referenceAudio) {
   makeIt(referenceAudio);
  }


function handleLikeRequest () {
   dispatch(likeUnlikePodcast(podcastId, token, username));
   onToggleLike();
}
  
  
  // CALCULATING DURATION  AND CURRENT TIME
  useEffect(() => {
  changeDurationString(duration);
  }, [duration]);

  useEffect(() => {
    changeCurrentTimeString(currentTime);
  }, [currentTime, durationString]);


  const playerClicked = useCallback(() => {
      setClicked(prevState => !prevState);
  }, []);

  
  const pausePlayPodcast = (e) => {
    if(e) {
      e.stopPropagation();
    };

    setClicked(false);
    if(!paused) {
      referenceAudio.current.pause();
      setPaused(true);
    } else {
      referenceAudio.current.play();
      setPaused(false);
    }
  };


  return (
    <div className={classes.listenPodcast}>
      <Audio changedPlayBack={changedPlayBack} podcastId={podcastId} />
      <div className={classes.player} onClick={playerClicked}>
          <DurationBar percentage={percentage} />
         { clicked &&  <PlayPause hide={playerClicked} play={ pausePlayPodcast } paused={paused} /> }
      </div>
      <p className={classes.currentTime}>{currentTimeString}/{durationString}</p>
      <p onClick={handleLikeRequest}>{like ? "Unlike" : "Like"}</p>
    </div>
  );
}

export default PodcastFocus;