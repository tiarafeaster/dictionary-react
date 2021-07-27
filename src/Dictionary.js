import React, { useState } from "react";
import axios from "axios";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}
    `;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Dictionary;
