import React from "react";
import * as api from "../../api";
import ArticleCard from "./ArticleCard";

class ArticlesList extends React.Component {
  state = { articles: [], isLoading: true };
  render() {
    if (this.state.isLoading) return <p>Loading...</p>;
    return (
      <div>
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    // where is props coming from below?? -> ArticlesList has TWO parents. It is being called in homepage with no props getting passed down as we want ALL topics. It is also being called in TopicsPage where topic is getting passed on props down here as we only want to see what articles from a certain topic
    api.getArticles(this.props.topic).then(articles => {
      this.setState({ articles: articles, isLoading: false });
    });
  };
}

export default ArticlesList;

/* <li key={article.article_id}>
  <h3>{article.title}</h3>
  <p>Author: {article.author}</p>
  <p>Topic: {article.topic}</p>
  <p>Created at: {article.created_at}</p>
</li>; */
