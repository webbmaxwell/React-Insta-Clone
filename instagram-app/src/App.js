import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from "./components/SearchBar/SearchBar.js"
import dummyData from './dummy-data.js';
import PostContainer from "./components/PostContainer/PostContainer.js"
// import CommentSection from "./components/CommentSection/CommentSection.js"

function App(props) {
  return (
    <div className="App">
      <SearchBar />
      <div className="posts">
        {props.dummyData.map(data => (
          <PostContainer data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
