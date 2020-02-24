import React from "react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

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

  handleClick = () => {
    this.props.history.push('/view-post')
  }

  render() {
    console.log(this.props)
    return (
      <>
        {this.props.location.pathname === "/dashboard" ? (
          <div 
            className="post-body"
            onClick={this.handleClick}
          >
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
      ) : (
        <div className="post-body">
          <h1>
            {this.props.title}
          </h1>
          <p>
            by: {this.props.id}
          </p>
          <img
            src={this.props.img}
          />
        </div>
      )}
      </>
    );
  }
}

export default connect(null)(withRouter(Post));
