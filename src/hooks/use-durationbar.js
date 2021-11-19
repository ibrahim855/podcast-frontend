import React, { useState} from 'react';



const useDurationBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


    const changedPlayBack = (referenceAudio) => {
      const currentTime = Math.floor(referenceAudio.current.currentTime);
      const time = referenceAudio.current.duration;
      const currentPercentage = Math.floor((currentTime / time) * 100);
      setCurrentTime(currentTime);
      setDuration(time);
      setPercentage(currentPercentage);
  };


  return {
    percentage,
    currentTime,
    duration,
    changedPlayBack,
  }
}

export default useDurationBar;