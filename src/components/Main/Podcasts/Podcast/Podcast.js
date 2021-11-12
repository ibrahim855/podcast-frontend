import React, { useContext } from 'react';
import classes from './Podcast.module.css';

//REACT ROUTER DOM
import { Link } from 'react-router-dom';

//REDUX STUFF
import { useSelector, useDispatch } from 'react-redux';
import {
  removePodcast,
  likeUnlikePodcast,
} from '../../../../context/podcast/podcast-actions';

// REACT CONTEXT
import UiContext from '../../../../context/react-context/context';

//UTILITY FUNCTIIONS
import { howMuchTimeAgo } from '../../../../utility/format.date';

function Podcast(props) {
  const { podcast } = props;
  const timePassed = howMuchTimeAgo(+podcast.date);
  const token = useSelector((state) => state.authentication.token);
  const username = useSelector((state) => state.authentication.username);
  const dispatch = useDispatch();

  const { onChangeModal } = useContext(UiContext);

  const ok = () => {
    dispatch(removePodcast(podcast.podcastId, token));
    onChangeModal(null);
  };

  const notOk = () => {
    onChangeModal(null);
  };

  const onRemovePodcast = () => {
    onChangeModal({
      content: 'Sei sucuro di voler rimuovere il podcast?',
      ok: ok,
      notOk: notOk,
    });
  };

  const likePodcast = () => {
    dispatch(likeUnlikePodcast(podcast.podcastId, token, username));
  };

  return (
    <div className={classes.podcast}>
      <h3>{podcast.author}</h3>
      <p>{podcast.description}</p>
      <p className={classes.timeAgo}>{timePassed}</p>
      <Link
        className={classes.link}
        to={`/podcasts/listen/${podcast.podcastId}`}
      >
        Ascolta
      </Link>

      {username === podcast.author && (
        <p onClick={onRemovePodcast} className={classes.remove}>
          Remove
        </p>
      )}

      <div className={classes.stats}>
        <p>Mi piace: {podcast.likeCount}</p>
        <p>Ascolti: {podcast.viewCount}</p>
      </div>

      <p onClick={likePodcast}>Like</p>
    </div>
  );
}

export default Podcast;
