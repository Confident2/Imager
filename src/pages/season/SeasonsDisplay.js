import React from "react";

const seasonConfig = {
  Summer: {
    text: "Yay! it is Summer"
  },
  Winter: {
    text: "Winter is here!"
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeaonsDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <h1> Season Detector</h1>
      <h2>{ text}</h2>
    </div>
  );
};

export default SeaonsDisplay;
