import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}
    `;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>React Dictionary App</h2>

      <section>
        <form>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            placeholder="melanin"
          />
          <button className="btn" onClick={search}>
            Search
          </button>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}

export default Dictionary;
