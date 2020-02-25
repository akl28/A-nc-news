import React from "react";
import ArticlesList from "./Articles/ArticlesList";
import styles from "../css-styling/HomePage.module.css";

const Homepage = () => {
  return (
    <div>
      <h2 className={styles.homepage_header}>Latest News</h2>
      <main className={styles.homepage}>
        <ArticlesList />
      </main>
    </div>
  );
};

export default Homepage;
