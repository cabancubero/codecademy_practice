import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Terms" />
      <input type="text" placeholder="Location" />
      <button>Search</button>
      <div className="sorting-options">
        <button>Best Match</button>
        <button>Highest Rated</button>
        <button>Most Reviewed</button>
      </div>
    </div>
  );
}

export default SearchBar;
