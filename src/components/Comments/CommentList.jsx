import React from "react";
// import ErrorComponent from "./ErrorComponent";
import CommentCard from "./CommentCard";
import { getCommentsByArticleID } from "../../api";
import NewComment from "../Comments/NewComment";

class CommentList extends React.Component {
  state = { comments: [], err: null, isLoading: true };
  render() {
    // console.log(this.props);
    if (this.state.isLoading) return <p>Loading...</p>;
    const { comments } = this.state;
    return (
      <section>
        <NewComment
          user={this.props.user}
          article_id={this.props.article_id}
          addNewComment={this.addNewComment}
        />
        <h3>Discussion</h3>
        <ul>
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
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
