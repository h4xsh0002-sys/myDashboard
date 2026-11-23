import React from "react";
import SearchBar from "./SearchBar.jsx";

export default function Header({ searchText, onSearchChange, onLogout }) {
  return (
    <header className="top-bar">
      <div className="brand">
        <span className="brand-icon" aria-hidden="true">🛍️</span>
        <span>Indian Online Market</span>
      </div>

      <SearchBar searchText={searchText} onSearchChange={onSearchChange} />

      <button type="button" className="header-button" onClick={onLogout}>
        Logout
      </button>
    </header>
  );
}