import { URL } from '../../../utility/baseURL';


import React, { useRef, useEffect } from 'react';


const Audio = (props) => {
    const { podcastId } = props;
    const { changedPlayBack, makeIt } = props;
    const podcastRef = useRef();

    useEffect(() => {
        makeIt(podcastRef);
    }, [makeIt]);

    const handleIt = () => {
        changedPlayBack(podcastRef);    
    }

    return (
         <audio ref={podcastRef} autoPlay onTimeUpdate={handleIt}>
        <source src={`${URL}/podcasts/${podcastId}/listen`} />
      </audio>
    )
}

export default Audio;