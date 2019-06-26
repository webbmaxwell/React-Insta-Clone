import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from "./components/SearchBar/SearchBar.js"
import dummyData from './dummy-data.js';
import PostContainer from "./components/PostContainer/PostContainer.js"
// import CommentSection from "./components/CommentSection/CommentSection.js"

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(item => <PostContainer key={item} value={item} />)}
    </div>
  );
}

export default App;
