import React from "react";
import { getArticleByID } from "../../api";
import ErrorComponent from "../ErrorComponent";
import CommentList from "../Comments/CommentList";
import Loading from "../Loading";
import Moment from "react-moment";
import styles from "../../css-styling/SingleArticle.module.css";

class SingleArticle extends React.Component {
  state = { article: null, err: null, isLoading: true };
  render() {
    const { article } = this.state;
    if (this.state.err) return <ErrorComponent err={this.state.err} />;
    else if (this.state.isLoading) return <Loading />;
    else
      return (
        <div>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          <p className={styles.articleBody}>
            {article.body}
            <br></br>
            <br></br>
            <b className={styles.user}>By: {article.author}</b>
            <br></br>
            <b className={styles.date}>
              <Moment format="D MMM YYYY">{article.created_at}</Moment>
            </b>
          </p>
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
