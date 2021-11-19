import { useState, useEffect  } from 'react';
import { URL } from '../utility/baseURL';


const useLike = (podcastId, username) => {
  const [like, setLike] = useState(true);




 // setting the like

 
  useEffect(() => {
    fetch(`${URL}/podcasts/${podcastId}/get`).then(res => {
    return res.json();
    }).then((data) => {
      const { likes } = data;
      const index = likes.findIndex(like => like.author === username);
      if(index >=  0) {
        setLike(true)
      } else {
        setLike(false);
      };
    }).catch(err => console.log(err));
  }, [podcastId, username]);


   const onToggleLike = () => {
       setLike(prevState => !prevState);
   };

   return { 
       like,
       onToggleLike
   };

}

export default useLike;