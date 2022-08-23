import React, { useContext } from "react";
import SweetContext from "../SweetContext";

function SearchForm() {
  const { query, setQuery, searchVisible, handleSearchSubmit } =
    useContext(SweetContext);

  return (
    <div className={`wrapper ${searchVisible ? "show" : "hide"}`}>
      <div className="row search-form">
        <form className="col-4" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Enter Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
