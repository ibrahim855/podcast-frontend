//UTILITY
import { URL } from "../../utility/baseURL";
// UI CONTEXT
import { UiActions } from '../ui/ui-slice';

// ACTION CREATORS

export const addComment = (token, comment, podcastId) => {
  return async (dispatch) => {
    const { author, content } = comment;

    const saveComment = async (token, comment, podcastId) => {
      const response = await fetch(`${URL}/comments/${podcastId}`, {
        method:'POST',
        body: JSON.stringify({
            content:content,
            author:author
        }), 
        headers: {
              'authorization': token,
              'Content-Type':'application/json',
          }
      });

      if(!response.ok) {
        throw new Error("Ops qualcosa è andato storto.");
      }
    };

    try {
      await saveComment(token, comment, podcastId);
      dispatch(UiActions.setNotification({
        status:'success',
        content:'Hai commentato questo podcast.'
      }))
    } catch (err) {
      dispatch(UiActions.setNotification({
        status:'error',
        content:err.message
      }));
    }
  };
};
