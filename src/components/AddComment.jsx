// import React from "react";
// import { postCommentByArticleID } from "../api";

// class AddComment extends React.Component {
//   state = { body: "", username: "" };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Comment:</label>
//           <textarea
//             required
//             rows="8"
//             cols="80"
//             onChange={event => this.handleChange(event.target.value)}
//             value={this.state.body}
//             name="body"
//             placeholder="Join the discussion"
//           ></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }

//   handleChange = comment => {
//     this.setState({ body: comment });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { article_id } = this.props;
//     const { username, body } = this.state;
//     this.setState({ body: "" });
//     postCommentByArticleID({ username: username, body: body }, article_id)
//       .then(newComment => {
//         console.log(newComment);
//         this.props.addNewComment(newComment);
//       })
//       .catch(err => console.log(err));
//   };
// }

// export default AddComment;
