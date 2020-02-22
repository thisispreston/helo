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
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.id}
        </p>
        <img
          src={this.props.img}
        />
      </div>
    );
  }
}

export default Post;
