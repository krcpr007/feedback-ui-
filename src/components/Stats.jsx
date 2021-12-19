import React from "react";
import PropTypes from "prop-types";

function Stats({ feedback }) {
  // calculate average
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  avg = avg.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}Reviews </h4>
      <h4>Average Rating : {isNaN(avg) ? 0 : avg} </h4>
    </div>
  );
}
Stats.PropTypes = {
  feedback: PropTypes.array.isRequired,
};
export default Stats;
