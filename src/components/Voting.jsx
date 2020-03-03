import React from "react";
import * as api from "../api";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

class Voting extends React.Component {
  state = { voteChange: 0, err: null };
  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <section>
        <p style={{ color: "black" }}>
          <FaHeart size={20} /> {votes + voteChange}
        </p>
        <button
          onClick={() => this.handleClick(1)}
          disabled={voteChange > 0}
          style={{ color: "#ed4799" }}
        >
          <FiArrowUpCircle size={25} />
        </button>
        <button
          onClick={() => this.handleClick(-1)}
          disabled={voteChange < 0}
          style={{ color: "#ed4799" }}
        >
          <FiArrowDownCircle size={25} />
        </button>
      </section>
    );
  }

  handleClick = increment_by => {
    const { article_id } = this.props;
    const { comment_id } = this.props;

    this.setState(currentState => {
      return { voteChange: currentState.voteChange + increment_by };
    });
    if (!article_id)
      api
        .patchVotesByCommentID(comment_id, increment_by)
        .catch(err => this.setState({ err }));
    else {
      api
        .patchVotesByArticleID(article_id, increment_by)
        .catch(err => this.setState({ err }));
    }
  };
}

export default Voting;
