//UTILITY
import { URL } from "../../utility/baseURL";
// UI CONTEXT
import { UiActions } from "../ui/ui-slice";
import { CommentActions } from "../comment/comment-slice";

// ACTION CREATORS

// POST REQUEST AND A COMMENT TO THE PAGE

export const addComment = (token, comment, podcastId) => {
  return async (dispatch) => {
    const { author, content } = comment;

    const saveComment = async (token, comment, podcastId) => {
      const response = await fetch(`${URL}/comments/${podcastId}`, {
        method: "POST",
        body: JSON.stringify({
          content: content,
          author: author,
        }),
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Ops qualcosa è andato storto.");
      }
      const commentSaved = await response.json();
      const cool = {
        author: commentSaved.comment.author,
        content: commentSaved.comment.content,
        date: commentSaved.comment.date,
        commentId: commentSaved.comment.commentId,
      };
      dispatch(CommentActions.addComment(cool));
    };

    try {
      await saveComment(token, comment, podcastId);
      dispatch(
        UiActions.setNotification({
          status: "success",
          content: "Hai commentato questo podcast.",
        })
      );
    } catch (err) {
      dispatch(
        UiActions.setNotification({
          status: "error",
          content: err.message,
        })
      );
    }
  };
};

export const fetchComments = (token, podcastId) => {
  return async (dispatch) => {
    const fetchCommentsForPodcasts = async () => {
      const response = await fetch(`${URL}/comments/${podcastId}/getComments`, {
        headers: {
          authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Ops qualcosa è andato storto.");
      }

      const arr = await response.json();
      dispatch(CommentActions.setComments(arr));
    };

    try {
      await fetchCommentsForPodcasts();
      // dispatch(
      //   UiActions.setNofitication({
      //     status: "success",
      //     content: "Commenti caricati con successo.",
      //   })
      // );
    } catch (err) {
      // dispatch(
      //   UiActions.setNofitication({
      //     status: "error",
      //     content: err.message,
      //   })
      // );
    }
  };
};

export const removeComment = (commentId, token) => {
  return async (dispatch) => {
    const removeCommentFromDatabase = async () => {
      const response = await fetch(`${URL}/comments/${commentId}/delete`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error("Ops Qualcosa è andato storto.");
      }

      dispatch(CommentActions.removeComment(commentId));
    };

    try {
      await removeCommentFromDatabase();
      dispatch(UiActions.setNotification({
        status:'success',
        content:'Hai rimosso il commento con successo.'
      }));
    } catch (err) {
      dispatch(UiActions.setNotification({
        status:'error',
        content:err.message
      }));
    }
  };
};