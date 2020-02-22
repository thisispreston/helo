import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      img: '',
      content: '',
      authorName: '',
      authorPic: '',
    }
  }



  render() {
    return (
      <div className="post-body">
        {this.props.title}
        {this.props.id}
        {this.props.img}
      </div>
    );
  }
}

export default Post;
