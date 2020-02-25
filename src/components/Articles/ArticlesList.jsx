import React from "react";
import * as api from "../../api";
import ArticleCard from "./ArticleCard";
import Sorting from "../Sorting";

class ArticlesList extends React.Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    isLoading: true,
    err: null
  };
  render() {
    // console.log(this.props, "<<<");
    if (this.state.isLoading) return <p>Loading...</p>;
    return (
      <div>
        <Sorting sortArticles={this.sortArticles} />
        <ul>
          {this.state.articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </div>
    );
  }

  sortArticles = (sort_by, order) => {
    this.setState({ sort_by, order });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order } = this.state;
    const { topic } = this.props;
    const changeTopic = prevProps.topic !== topic;
    const changeSort = sort_by !== prevState.sort_by;
    const changeOrder = order !== prevState.order;
    if (changeTopic || changeSort || changeOrder) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { sort_by, order } = this.state;
    const { topic, author } = this.props;
    api
      .getArticles(topic, author, sort_by, order)
      .then(articles => {
        this.setState({ articles: articles, isLoading: false, err: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, err: err.response });
      });
  };
}

export default ArticlesList;
