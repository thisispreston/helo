import React from "react";
import { Link } from "react-router-dom";


class Nav extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }
  }



  render() {
    return (
      <div className="nav-body">
        <div>
          User image and name
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

export default Nav;
