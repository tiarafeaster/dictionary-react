import React from "react";

function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h2>{props.results.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}

export default Results;
