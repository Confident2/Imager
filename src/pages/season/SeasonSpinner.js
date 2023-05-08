import React from "react";

const seasonSpinner = (props) => {
  return <div>{props.message}</div>;
};

seasonSpinner.defaultProps = {
  message: "Loading...",
};

export default seasonSpinner;
