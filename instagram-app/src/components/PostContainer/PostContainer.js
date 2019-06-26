import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js'
import dummyData from '../../dummy-data.js'

class PostContainer extends React.Container {
  render() {
    return (
      <div>
        {dummyData.map(item => <CommentSection key={item} comments={item} />)}
      </div>
    )
  }
}

export default PostContainer;
