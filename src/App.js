import React from "react";
import { Router } from "@reach/router";
// import "./css-styling/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import TopicsPage from "./components/TopicsPage";
import SingleArticle from "./components/SingleArticle";
import ErrorComponent from "./components/ErrorComponent";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Router>
        <Homepage path="/" />
        <TopicsPage path="/articles/:topic" />
        <SingleArticle path="/articles/id/:article_id" />
        <ErrorComponent path="/*" />
      </Router>
    </div>
  );
};

export default App;

//  <ErrorComponent default />;
