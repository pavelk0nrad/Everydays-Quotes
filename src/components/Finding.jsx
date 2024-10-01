import React, { useState } from "react";

function Finding({ onSearch, authors }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredAuthors = authors.filter((author) =>
        author.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredAuthors);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  return (

    <div className="finding-form">
 
      <input
        type="text"
        id="searchInput"
        value={searchTerm}
        placeholder="Vyhledávání podle autorů"
        onChange={handleInputChange}
      />
     
      <input
        type="button"
        value="Search"
        onClick={handleSearch}
      />

      
      {suggestions.length > 0 && (
        <ul className="finding-box">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
        
      )}
 </div>
  );
}

export default Finding;
