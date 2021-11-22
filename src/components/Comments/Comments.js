import React, { useEffect, useState } from "react";
import classes from "./Comments.module.css";
import { useParams } from "react-router-dom";

//UTILITY
import { URL } from "../../utility/baseURL";

//LAYOUT
import Layout from "../UI/Layout/Layout";

//REACT-REDUX
import { useSelector } from "react-redux";

//COMPONENTS
import Comment from "./Comment/Comment";
import AddComment from "./AddComment/AddComment";

function Comments() {
  const [comments, setComments] = useState([]);
  const params = useParams();
  const { podcastId } = params;
  const token = useSelector((state) => state.authentication.token);

  useEffect(() => {
    fetch(`${URL}/comments/${podcastId}/getComments`, {
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            setComments(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [podcastId, token]);

  return (
    <Layout>
      <ul className={classes.commentsContainer}>
        {comments.map((comment) => (
          <Comment key={comment.commentId} comment={comment} />
        ))}
      </ul>
      <AddComment />
    </Layout>
  );
}

export default React.memo(Comments);
