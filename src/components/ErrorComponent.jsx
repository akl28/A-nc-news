import React from "react";

const ErrorComponent = ({ err }) => {
  // err has msg key and status
  return (
    <section>
      <p>Oops</p>
      <p>{err ? err.data.msg : "oops"}</p>
      <p>{err ? err.status : "500"}</p>
    </section>
  );
};

export default ErrorComponent;

// client errors
// wrong type -> can use type="text" in input
// empty input -> can use 'required' in input
// too long/short -> set min/max on input, maxlength="30"

//server side errors -> where we have to go to database first to check if it is an error, without us forseeing that
