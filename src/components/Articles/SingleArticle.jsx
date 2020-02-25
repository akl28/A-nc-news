import React from "react";
import { getArticleByID } from "../../api";
import ErrorComponent from "../ErrorComponent";
import CommentList from "../Comments/CommentList";

class SingleArticle extends React.Component {
  state = { article: null, err: null, isLoading: true };
  render() {
    const { article } = this.state;
    if (this.state.err) return <ErrorComponent err={this.state.err} />;
    else if (this.state.isLoading) return <p>Loading</p>;
    else
      return (
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
          <p>Author: {article.author}</p>
          <p>Date: {article.created_at}</p>
          <CommentList user={this.props.user} article_id={article.article_id} />
        </div>
      );
  }

  componentDidMount() {
    getArticleByID(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err: err.response, isLoading: false });
      });
  }
}
export default SingleArticle;
