import React from "react";
import ArticlesList from "./Articles/ArticlesList";
import styles from "../css-styling/HomePage.module.css";

const Homepage = () => {
  return (
    <main>
      <h2 className={styles.homepage_header}>HOME</h2>
      <section className={styles.homepage}>
        <ArticlesList />
      </section>
    </main>
  );
};

export default Homepage;
