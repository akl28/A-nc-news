import React from "react";

const CommentCard = props => {
  return (
    <section>
      <li>
        <p>User: {props.comment.author}</p>
        <p>Date: {props.comment.created_at}</p>
        <p>{props.comment.body}</p>
      </li>
    </section>
  );
};

export default CommentCard;
