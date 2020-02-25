import React from "react";

class Sorting extends React.Component {
  state = {
    sort_by: "created_at",
    order: "desc"
  };
  render() {
    return (
      <section>
        <form>
          <label>Order: </label>
          <select
            onChange={({ target: { value } }) =>
              this.setState({ order: value })
            }
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </form>
        <form>
          <label>Sort by: </label>
          <select
            onChange={({ target: { value } }) =>
              this.setState({ sort_by: value })
            }
          >
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </select>
        </form>
      </section>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortArticles } = this.props;
    const { sort_by, order } = this.state;
    const sortByChanged = sort_by !== prevState.sort_by;
    const orderChanged = order !== prevState.order;
    if (sortByChanged || orderChanged) {
      sortArticles(sort_by, order);
    }
  }
}

export default Sorting;
