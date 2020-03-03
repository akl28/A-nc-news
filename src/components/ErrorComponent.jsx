import React from "react";
import styles from "../css-styling/ErrorPage.module.css";
import donut from "../css-styling/images/donut2.jpg";

const ErrorComponent = ({ err }) => {
  const img = (
    <img
      style={{ height: "200px", width: "200px" }}
      src={donut}
      alt="404 not found"
    ></img>
  );
  return (
    <section className={styles.errorPage}>
      <p>Oops! Something's missing...</p>
      {img}
      <p>
        {err ? err.data.msg : ""} - {err ? err.status : "500"}
      </p>
    </section>
  );
};

export default ErrorComponent;

// client errors
// wrong type -> can use type="text" in input
// empty input -> can use 'required' in input
// too long/short -> set min/max on input, maxlength="30"

//server side errors -> where we have to go to database first to check if it is an error, without us forseeing that
