import React from "react";
// import ErrorComponent from "./ErrorComponent";
import CommentCard from "./CommentCard";
import { getCommentsByArticleID } from "../api";
// import AddComment from "./AddComment";

class CommentPage extends React.Component {
  state = { comments: [], err: null, isLoading: true };
  render() {
    if (this.state.isLoading) return <p>Loading...</p>;
    const { comments } = this.state;
    return (
      <section>
        <h3>Discussion</h3>
        {/* <AddComment
          article_id={this.props.article_id}
          addNewComment={this.addNewComment}
        /> */}
        <ul>
          {comments.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    getCommentsByArticleID(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response, isLoading: false });
      });
  }

  // addNewComment = newComment => {
  //   this.setState(currentState => {
  //     return { comments: [newComment, ...currentState.comments] };
  //   });
  // };
}

export default CommentPage;
