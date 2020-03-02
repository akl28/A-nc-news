import React from "react";
// import ErrorComponent from "./ErrorComponent";
import CommentCard from "./CommentCard";
import * as api from "../../api";
import { getCommentsByArticleID } from "../../api";
import NewComment from "../Comments/NewComment";
import Loading from "../Loading";
import { FaComment } from "react-icons/fa";
import styles from "../../css-styling/CommentList.module.css";

class CommentList extends React.Component {
  state = { comments: [], err: null, isLoading: true };
  render() {
    if (this.state.isLoading) return <Loading />;
    const { comments } = this.state;
    return (
      <section>
        <NewComment
          user={this.props.user}
          article_id={this.props.article_id}
          addNewComment={this.addNewComment}
        />
        <h3 className={styles.header}>
          <FaComment /> Discussion
        </h3>

        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                user={this.props.user}
                comment={comment}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </ul>
      </section>
    );
  }

  addNewComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  deleteComment = comment_id => {
    const { comments } = this.state;
    api.deleteCommentByID(comment_id).catch(err => this.setState({ err }));
    const filteredComments = comments.filter(
      comment => comment.comment_id !== comment_id
    );
    this.setState({ comments: filteredComments });
  };

  componentDidMount() {
    getCommentsByArticleID(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response, isLoading: false });
      });
  }
}

export default CommentList;
