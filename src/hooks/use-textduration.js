import { useState, useCallback } from 'react';


//UTILITY FUNCTIONS
import { transformPodcastDuration, transformCurrentTiming } from '../utility/format.date';





const useTextDuration = () => {
    const [durationString, setDurationString] = useState("00:00:00");
    const [currentTimeString, setCurrentTimeString] = useState("00:00:00");


    const changeDurationString = useCallback((duration) => {
           setDurationString(transformPodcastDuration(duration));
    }, []);


    const changeCurrentTimeString = useCallback((currentTime) => {
        setCurrentTimeString(transformCurrentTiming(currentTime, (durationString.split(':'))));
    }, [durationString])

    return {
        durationString, 
        currentTimeString,
        changeDurationString,
        changeCurrentTimeString
    };

}


export default useTextDuration;