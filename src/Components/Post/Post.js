import React from "react";
import axios from 'axios'
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

  componentDidMount () {
    this.getPosts(this.props.user_id)
  }

  getPosts = (id) => {
    axios
      .get(`/api/posts/${id}`)
      .then( res => {
        let {username, profile_pic, title, img, content } = res.data
        this.setState({
          title,
          img,
          content,
          authorName: username,
          authorPic: profile_pic,
        })
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="post-body">
        <h1>
          {this.state.title}
        </h1>
        <div className='user-badge'>
          <p>
            by: {this.state.authorName}
          </p>
          <img
            alt='post'
            src={this.state.authorPic}
          />
        </div>
        <img 
          alt="post"
          src={this.state.img}
        />
        <p>
          {this.state.content}
        </p>
      </div>
    )}
  }

export default connect(null)(withRouter(Post));
