import React from "react";
import { Link } from "@reach/router";
import styles from "../../css-styling/ArticleCard.module.css";
import { FaHeart } from "react-icons/fa";

const ArticleCard = props => {
  return (
    <article className={styles.article_card}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/articles/id/${props.article.article_id}`}
      >
        <h2 className={styles.article_card_title}> {props.article.title}</h2>
      </Link>
      <p>Author:{props.article.author}</p>
      <p>Topic:{props.article.topic} </p>
      <p>Date: {props.article.created_at}</p>
      <FaHeart /> {props.article.votes}
    </article>
  );
};

export default ArticleCard;
