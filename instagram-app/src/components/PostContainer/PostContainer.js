import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js'

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
