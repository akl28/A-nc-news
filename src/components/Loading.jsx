import React from "react";
import Loader from "react-loader-spinner";

export default class Loading extends React.Component {
  render() {
    const style = {
      position: "fixed",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
    return (
      <Loader
        type="ThreeDots"
        color="#ed4799"
        height={100}
        width={100}
        style={style}
      />
    );
  }
}
