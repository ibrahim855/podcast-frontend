import React from "react";

import { howMuchTimeAgo  } from "../../../utility/format.date";

const Comment = (props) => {
  const { comment } = props;
  const timeAgo = howMuchTimeAgo(comment.date);


  return (
    <li>
      <h4>{comment.author}</h4>
      <p>{comment.content}</p>
      <u>{timeAgo}</u>
    </li>
  );
};

export default Comment;
