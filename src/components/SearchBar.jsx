import React from "react";

export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <label className="search-box">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input
        type="search"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search products..."
        aria-label="Search products by name or category"
      />
    </label>
  );
}