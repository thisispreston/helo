import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      profile_pic: '',
    }
  }

  render() {
    return (
      <div className="nav-body">
        <div className='profile-tag'>
          <img
            alt='profile pic'
            src={this.props.profile_pic}
            height="125px"
            width="125px"
          />
          <p>{this.props.username}</p>
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
  const { username, profile_pic } = reduxState.user
  return {
    username,
    profile_pic,
  }
}

export default connect(mapStateToProps)(Nav)
