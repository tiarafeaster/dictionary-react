import React from "react";
import "./Phonetics.css";

function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <span className="text"> {props.phonetic.text} </span>
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetics;
