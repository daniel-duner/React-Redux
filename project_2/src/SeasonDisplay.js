import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: { text: "Let's hit the beach", iconName: "sun", iconColor: "yellow" },
  winter: {
    text: "Burr! it is cold!",
    iconName: "snowflake",
    iconColor: "blue"
  }
};

const getSeason = (lat, month) => {
  console.log(lat);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};


const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, iconColor } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i class={`icon-left ${iconColor} massive ${iconName} icon`} />
      <br />
      {text}
      <br />
      <i class={`icon-right ${iconColor} massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
