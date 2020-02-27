import React from "react";
import Voting from "../Voting";
import Moment from "react-moment";

const CommentCard = props => {
  return (
    <section>
      <li>
        <p>{props.comment.body}</p>
        <p>User: {props.comment.author}</p>
        <Moment format="D MMM YYYY">{props.comment.created_at}</Moment>
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
