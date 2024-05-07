import React, { useState } from 'react';
import { TYPE_OF_REQUESTS } from './Request';

function FilterBar({ requests, onFilterChange }) {
  const [selectedType, setSelectedType] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Derive unique types and tags from requests
  const uniqueTypes = [...new Set(requests.map((req) => req.type))];
  const uniqueTags = [...new Set(requests.flatMap((req) => req.tags))];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    onFilterChange(event.target.value, selectedTag); 
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
    onFilterChange(selectedType, event.target.value); 
  };

  return (
    <div className="filter-bar">
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">All Types</option>
        {uniqueTypes.map((type) => (
          <option key={type} value={type}>
            {type} 
          </option>
        ))}
      </select>

      <select value={selectedTag} onChange={handleTagChange}>
        <option value="">All Tags</option>
        {uniqueTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
