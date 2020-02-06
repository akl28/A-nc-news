import React from "react";
import { Link } from "@reach/router";
import styles from "../css-styling/ArticleCard.module.css";

const ArticleCard = props => {
  return (
    <article className={styles.card}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/articles/id/${props.article.article_id}`}
      >
        <h2>{props.article.title}</h2>
      </Link>
      <p>Author:{props.article.author}</p>
      <p>Topic:{props.article.topic} </p>
      <p>Date: {props.article.created_at}</p>
    </article>
  );
};

export default ArticleCard;
