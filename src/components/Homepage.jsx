import React from "react";
import ArticlesList from "../components/ArticlesList";
import styles from "../css-styling/HomePage.module.css";

const Homepage = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <main className={styles.homepage}>
        <ArticlesList />
      </main>
    </div>
  );
};

export default Homepage;
