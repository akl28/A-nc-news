import React from "react";
import * as api from "../../api";
import styles from "../../css-styling/NewComment.module.css";

class NewComment extends React.Component {
  state = { body: "", err: null };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Post a comment:
          <textarea
            name="comment"
            cols="80"
            rows="10"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Join the discussion..."
          ></textarea>
        </label>
        <button type="submit">Submit!</button>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { article_id, user } = this.props;
    api
      .postComment(article_id, body, user)
      .then(newComment => {
        this.setState({ body: "" });
        this.props.addNewComment(newComment);
      })
      .catch(err => console.log(err));
  };
  // make a function to post a new comment, setState -> func/obj
  // button -> on click
  // input -> onChange -> takes a function
  // setState
}

export default NewComment;
