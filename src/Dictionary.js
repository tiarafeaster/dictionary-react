import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}
    `;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f917000010000012763f54e5451443dba1f80931ad177be";
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>Tiara's Awesome Dictionary App</h2>

        <form>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            placeholder=" mɛlənən"
          />
          <button className="btn" onClick={search}>
            Search
          </button>
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}

export default Dictionary;
