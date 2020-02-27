import React from "react";
import { Link } from "@reach/router";
import styles from "../../css-styling/ArticleCard.module.css";
import { FaHeart } from "react-icons/fa";
import Moment from "react-moment";

const ArticleCard = props => {
  return (
    <article className={styles.article_card}>
      <main>
        <Link
          style={{ textDecoration: "none" }}
          to={`/articles/id/${props.article.article_id}`}
        >
          <h2 className={styles.article_card_title}> {props.article.title}</h2>
        </Link>
        <p className={styles.articleInfo}>
          By {props.article.author}
          <br></br>
          in {props.article.topic}
          <br></br>
          <Moment format="D MMM YYYY">{props.article.created_at}</Moment>
          <br></br>
          <FaHeart /> {props.article.votes}
        </p>
      </main>
    </article>
  );
};

export default ArticleCard;
