import React, { useContext } from "react";

//UTILITY
import { howMuchTimeAgo } from "../../../utility/format.date";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { removeComment } from "../../../context/comment/comment-actions";

// REACT CONTEXT
import UiContext from "../../../context/react-context/context";

const Comment = (props) => {
  const { comment } = props;
  const timeAgo = howMuchTimeAgo(comment.date);
  const username = useSelector((state) => state.authentication.username);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  const { onChangeModal } = useContext(UiContext);

  const ok = () => {
    dispatch(removeComment(comment.commentId, token));
    onChangeModal(null);
  };

  const notOk = () => {
    onChangeModal(null);
  };

  const handleRemoveAction = () => {
    onChangeModal({
      content: "Sei sicuro di voler rimuovere quest comment?",
      ok: ok,
      notOk: notOk,
    });
  };

  return (
    <li>
      <h4>{comment.author}</h4>
      <p>{comment.content}</p>
      <u>{timeAgo}</u>
      {username === comment.author && (
        <p onClick={handleRemoveAction}>RIMUOVI</p>
      )}
    </li>
  );
};

export default Comment;
