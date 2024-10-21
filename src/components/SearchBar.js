import React from 'react';
import './SearchBar.css'; 

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className='search-bar'>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search for a recipe..." 
        />
        <button type="submit">Search</button> 
      </form>
    </div>
  );
};

export default SearchBar; 
