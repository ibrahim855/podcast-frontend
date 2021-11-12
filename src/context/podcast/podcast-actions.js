import { URL } from '../../utility/baseURL';
import { PodcastActions } from './podcast-slice';
import { UiActions } from '../ui/ui-slice';

//FETCHING PODCASTS
export const fetchPodcasts = () => {
  return async (dispatch) => {
    const fetchPosts = async () => {
      const res = await fetch(URL + '/podcasts');
      if (!res.ok) {
        throw new Error('Qualcosa è andato storto.');
      }

      const podcasts = await res.json();
      dispatch(PodcastActions.setPodcasts(podcasts));
    };

    try {
      await fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };
};

// SAVING A PODCAST
export const addPodcast = (data, token) => {
  return async (dispatch) => {
    const saveInDatabase = async () => {
      const res = await fetch(URL + '/podcasts/add-podcast', {
        method: 'POST',
        body: data,
        headers: {
          authorization: token,
        },
      });

      if (!res.ok) {
        throw new Error('Ops Qualcosa è andato storto.');
      }

      const podcast = await res.json();
      dispatch(PodcastActions.setPodcasts(podcast));
    };

    try {
      await saveInDatabase();
      dispatch(
        UiActions.setNotification({
          status: 'success',
          content: 'Podcast caricato con successo.',
        })
      );
    } catch (err) {
      dispatch(
        UiActions.setNotification({
          status: 'error',
          content: 'Podcast non caricato con successo.',
        })
      );
    }
  };
};

//REMOVING A PODCAST
export const removePodcast = (id, token) => {
  return async (dispatch) => {
    const removeRequest = async () => {
      const res = await fetch(`${URL}/podcasts/${id}/delete-podcast`, {
        method: 'DELETE',
        headers: {
          authorization: token,
        },
      });

      // here we update the UI
      if (res.status !== 200) {
        const message = await res.json();
        throw new Error(message);
      }

      if (!res.ok) {
        throw new Error(res.message);
      }

      dispatch(PodcastActions.removePodcast(id));
      dispatch(
        UiActions.setNotification({
          status: 'success',
          content: 'Podcast rimosso con successo.',
        })
      );
    };

    try {
      await removeRequest();
    } catch (err) {
      dispatch(
        UiActions.setNotification({
          status: 'error',
          content: 'qualcosa è andato storto.',
        })
      );
    }
  };
};

// LIKE AND UNLIKE PODCAST

export const likeUnlikePodcast = (id, token, username) => {
  return async (dispatch) => {
    const likeUnlikeRequest = async () => {
      const res = await fetch(`${URL}/likes/${id}/like`, {
        method:'POST',
        headers: {
          authorization: token,
        },
      });

      if (!res.ok) {
        throw new Error('Ops qualcosa è andato storto.');
      }
      const obj = await res.json();
      const { action } = obj;
      dispatch(PodcastActions.like({id, action, username}));
    };

    try {
      await likeUnlikeRequest();
    } catch (err) {
      console.log(err);
    }
  };
};
