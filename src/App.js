import React from "react";
import { Router } from "@reach/router";
// import "./css-styling/App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import TopicsPage from "./components/TopicsPage";
import SingleArticle from "./components/Articles/SingleArticle";
import ErrorComponent from "./components/ErrorComponent";

class App extends React.Component {
  state = {
    user: "jessjelly",
    users: ["jessjelly", "tickle122", "cooljmessy", "weegembump"]
  };

  selectUser = user => {
    this.setState({ user: user });
  };

  render() {
    const { user, users } = this.state;
    return (
      <div>
        <NavBar selectUser={this.selectUser} user={user} users={users} />
        <Header />
        <Router>
          <Homepage path="/" />
          <TopicsPage path="/articles/:topic" />
          <SingleArticle user={user} path="/articles/id/:article_id" />
          <ErrorComponent path="/*" />
        </Router>
      </div>
    );
  }
}

export default App;

//  <ErrorComponent default />;
