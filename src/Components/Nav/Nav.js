import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      imageURL: '',
    }
  }

  render() {
    return (
      <div className="nav-body">
        <div className='profile-tag'>
          <img src={this.state.imageURL} />
          <p>{this.state.username}</p>
        </div>
        <div className="nav-buttons">
          <Link to="/dashboard">Home</Link>
        </div>
        <div className="nav-buttons">
          <Link to="/new-post">New Post</Link>
        </div>
        <div className="nav-buttons">
          <Link to="/">Logout</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { username, imageURL } = reduxState
  return {
    username,
    imageURL,
  }
}

export default connect(mapStateToProps)(Nav);
