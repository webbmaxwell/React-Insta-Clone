import React from 'react';
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        array
        <input type="text" name="comment" placeholder="comment" />
      </div>
    )
  }
}

export default CommentSection;
