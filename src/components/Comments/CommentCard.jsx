import React from "react";

const CommentCard = props => {
  return (
    <section>
      <li>
        <p>User: {props.comment.author}</p>
        <p>Date: {props.comment.created_at}</p>
        <p>{props.comment.body}</p>
      </li>
      <button
        onClick={() => {
          props.deleteComment(props.comment.comment_id);
        }}
        disabled={props.comment.author !== props.user}
      >
        Delete comment!
      </button>
    </section>
  );
};

export default CommentCard;