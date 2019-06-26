import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Container {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div>
        <input type="text" name="search" />
      </div>
    )
  }
}

export default SearchBar;
