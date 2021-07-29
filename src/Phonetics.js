import React from "react";

function Phonetics(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetics;
