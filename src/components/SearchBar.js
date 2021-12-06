import React from "react";

export default function SearchBar(props) {
  return (
    <div className="input-group">
      <div className="form-outline">
        <input
          onChange={(e) => props.setSearchVal(e.target.value)}
          id="search-input"
          type="search"
          className="form-control"
          placeholder="Search using ID"
        />
      </div>
      <button
        style={{ backgroundColor: "#039938" }}
        onClick={props.onClick}
        id="search-button"
        type="button"
        className="btn"
      >
        <i style={{ color: "red" }} class="fas fa-candy-cane"></i>
      </button>
    </div>
  );
}
