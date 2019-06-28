import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="search" />
      </div>
    )
  }
}

export default SearchBar;
