import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container ">
      <div className="row">
        <div className="col">
          <h2>React Dictionary App</h2>
        </div>
        <div>
          <Dictionary />
        </div>
      </div>
      <footer>
        This react dictionary app is{" "}
        <a
          href="https://www.github.com/tiarafeaster/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          open source
        </a>{" "}
        and coded by{" "}
        <a href="http://www.tiarajfeaster.com" target="_blank" rel="noreferrer">
          Tiara Feaster
        </a>
      </footer>
    </div>
  );
}

export default App;
