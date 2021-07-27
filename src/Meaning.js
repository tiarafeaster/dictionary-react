import React from "react";
import "./Meaning.css";

function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {" "}
              Definition:
              {definition.definition}
              <br />
              <em> Example: {definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
