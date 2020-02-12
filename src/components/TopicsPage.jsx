import React from "react";
import ArticlesList from "./ArticlesList";
import styles from "../css-styling/TopicsPage.module.css";

const TopicsPage = ({ topic }) => {
  return (
    <div>
      <h2 className={styles.topics_header}>{topic.toUpperCase()}</h2>
      <ArticlesList topic={topic} />
    </div>
  );
};

export default TopicsPage;
