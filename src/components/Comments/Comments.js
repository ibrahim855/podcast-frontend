import React, { useEffect } from "react";
import classes from "./Comments.module.css";
import { useParams } from "react-router-dom";

//LAYOUT
import Layout from "../UI/Layout/Layout";

//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../context/comment/comment-actions";
//COMPONENTS
import Comment from "./Comment/Comment";
import AddComment from "./AddComment/AddComment";

function Comments() {
  // const [comments, setComments] = useState([]);
  const params = useParams();
  const { podcastId } = params;
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comment.comments);

  useEffect(() => {
    dispatch(fetchComments(token, podcastId));
  }, [dispatch, token, podcastId]);

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
