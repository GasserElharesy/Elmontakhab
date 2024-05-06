import React from 'react';

function Tags(props) {
  const listedTags = () => {
    return Object.entries(props.tags).map(([key, value]) => (
      <button key={key} onClick={() => props.onTagClick(value)}>
        {value.toUpperCase()} 
      </button>
    ));
  };

  return (
    <div className="tag-list">
      {listedTags()}
    </div>
  );
}

export default Tags;