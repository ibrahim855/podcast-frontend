import React, { useState } from "react";
import classes from "./AddComment.module.css";

//REACT-ROUTER-DOM
import { useParams } from "react-router-dom";

//REACT REDUX
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../../context/comment/comment-actions";
//Components
import Button from "../../UI/Button/Button";

//CUSTOM HOOKS
import useInput from "../../../hooks/use-input";

const AddComment = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.authentication.token);
  const username = useSelector((state) => state.authentication.username);
  const dispatch = useDispatch();
  const { podcastId } = useParams();
  const {
    inputChange: contentChanged,
    value: contentValue,
  } = useInput((v) => v.trim().length > 0);


  const handleSubmittedForm = (ev) => {
    ev.preventDefault();
    setLoading(true);
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      setLoading(false);

      const comment = {
        author: username,
        content: contentValue,
      };


      dispatch(addComment(token, comment, podcastId));
    }, 2000);
  };

  return (
    <form className={classes.formComment} onSubmit={handleSubmittedForm}>
      <textarea onChange={contentChanged} rows="10" cols="50"></textarea>
      <Button type="submit" content="Commenta" loading={loading} />
    </form>
  );
};

export default AddComment;