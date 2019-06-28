import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js'
import dummyData from '../../dummy-data.js'

function PostContainer(props) {
  return (
    <div className="post-container">
      <h1>{props.data.username}</h1>
    </div>
  )
}

export default PostContainer;
