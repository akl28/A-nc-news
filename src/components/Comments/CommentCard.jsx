import React from "react";
import Voting from "../Voting";
import Moment from "react-moment";
import { FaComment } from "react-icons/fa";
import styles from "../../css-styling/CommentCard.module.css";

const CommentCard = props => {
  return (
    <section>
      <p className={styles.commentCard}>
        {props.comment.body}
        <br></br>
        <br></br>
        <b>Posted by {props.comment.author}</b>
        <br></br>
        <b>
          <Moment format="D MMM YYYY">{props.comment.created_at}</Moment>
        </b>
        <Voting
          user={props.user}
          votes={props.comment.votes}
          comment_id={props.comment.comment_id}
        />
        <br></br>
        <button
          className={styles.deleteButton}
          onClick={() => {
            props.deleteComment(props.comment.comment_id);
          }}
          disabled={props.comment.author !== props.user}
        >
          Delete comment
        </button>
      </p>
    </section>
  );
};

export default CommentCard;
