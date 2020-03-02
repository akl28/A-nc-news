import React from "react";
import * as api from "../../api";
import styles from "../../css-styling/NewComment.module.css";

class NewComment extends React.Component {
  state = { body: "", err: null };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.title}>
          Join the discussion...
          <br></br>
          <br></br>
          <textarea
            required
            className={styles.textarea}
            name="comment"
            cols="50"
            rows="6"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Post a comment here!"
          ></textarea>
        </label>
        <br></br>
        <button className={styles.submitButton} type="submit">
          Submit!
        </button>
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
