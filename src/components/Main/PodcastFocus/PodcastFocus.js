import React, { useState, useEffect, useCallback } from 'react';
import classes from './PodcastFocus.module.css';
import { useParams } from 'react-router-dom';


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
import Like from '../../UI/Like/Like';

import Comments from '../../Comments/Comments';

//UTILITY
import { percentageToSeconds } from '../../../utility/audio.format';



let referenceAudio = null;


function PodcastFocus() {
  const username = useSelector(state => state.authentication.username);
  const token = useSelector(state => state.authentication.token);
  
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const params = useParams();
  const { podcastId } = params;

  const { percentage, changedPlayBack, duration, currentTime } = useDurationBar(podcastId);

  const {
    durationString,
    currentTimeString,
    changeDurationString,
    changeCurrentTimeString
  } = useTextDuration();
 
  const { like, onToggleLike } = useLike(podcastId, username);

  const makeIt = useCallback((value) => {
  referenceAudio = value;
  }, []);


  function handleLikeRequest () {
    dispatch(likeUnlikePodcast(podcastId, token, username));
    onToggleLike();
  }


  const mapPercToCurrTime = (currTime) => {
    referenceAudio.current.currentTime = percentageToSeconds(currTime, referenceAudio);
    setPaused(false);
  }
  
  // CALCULATING DURATION  AND CURRENT TIME
  useEffect(() => {
  changeDurationString(duration);
  }, [duration,changeDurationString]);

  useEffect(() => {
    changeCurrentTimeString(currentTime);
  }, [currentTime, durationString, changeCurrentTimeString]);


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
      <Audio changedPlayBack={changedPlayBack} podcastId={podcastId} makeIt={makeIt}/>
      <div className={classes.player} onClick={playerClicked}>
          <DurationBar percentage={percentage} mapPercToCurrTime={mapPercToCurrTime}/>
         { clicked &&  <PlayPause hide={playerClicked} play={ pausePlayPodcast } paused={paused} /> }
      </div>
      <p className={classes.currentTime}>{currentTimeString}/{durationString}</p>
      <Like like={like} handleLikeRequest={handleLikeRequest} />
      <Comments />
    </div>
  );
}

export default PodcastFocus;