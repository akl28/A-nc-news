import React from "react";
import Voting from "../Voting";

const CommentCard = props => {
  return (
    <section>
      <li>
        <p>User: {props.comment.author}</p>
        <p>Date: {props.comment.created_at}</p>
        <p>{props.comment.body}</p>
      </li>
      <Voting
        user={props.user}
        votes={props.comment.votes}
        comment_id={props.comment.comment_id}
      />
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
