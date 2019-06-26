import React from 'react';
import "./CommentSection.css";

class CommentSection extends React.Component {
  construtor(props) {
    super(props)
    this.state = {value: ''};
  }

  handleChange(e) {
    this.setState({ e.target.value })
  }

  render() {
    return (
      <div>
        array
        <input type="text" name="comment" />
      </div>
    )
  }
}

export default CommentSection;
