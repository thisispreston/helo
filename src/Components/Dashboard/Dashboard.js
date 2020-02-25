import React from "react";
import './Dashboard.css'
import axios from 'axios'
// import Post from '../Post/Post'
import { connect } from 'react-redux'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      userPosts: true,
      posts: [],
    }
  }

  componentDidMount () {
    this.getPosts()
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  getPosts = () => {
    const { searchInput, userPosts } = this.state
    axios
      .get('/api/posts', {searchInput, userPosts})
      .then( res => {
        this.setState({
          posts: res.data,
        })
        console.log(res.data)
      })
      .catch( err => console.log(err))
  }

  toggleCheckbox = () => {
    if (this.state.userPosts === true) {
      this.setState({
        userPosts: false,
      })
      return this.getPosts()
    } else if (this.state.userPosts === false) {
      this.setState({
        userPosts: true,
      })
      return this.getPosts()
    }
  }

  resetSearch = () => {
    this.getPosts()
  }

  handleClick = (id) => {
    this.props.history.push(`/view-post/${id}`)
  }

  render() {
    let posts = this.state.posts.map( e => {
      return (
        <div 
          className="posts-card"
          key={e.post_id}
          onClick={() => {
            this.handleClick(e.author_id)
          }}
          // delete={this.delete}
          // toEditForm={this.toEditForm}
        >
          <h1>
            {e.title}
          </h1>
          <p>
            {e.username}
          </p>
          <img
            alt="post"
            src={e.img}
          />
        </div>
      )
    })

    return (
      <div className="dashboard-body">
        <div className='searchbar'>
          <div className='search'>
            <input
              className='search-input searchbar-items'
              placeholder="Search thru post content"
              name="searchInput"
              onChange={ e => this.handleInput(e)}
            />
            <img
              alt="search button"
              className='search-button searchbar-items'
              src="https://image.flaticon.com/icons/svg/49/49116.svg"
              height='35px'
              width='35px'
              // onClick={}
            />
            <button
              className='reset searchbar-items'
              // onClick={}
            >
              Reset
            </button>
          </div>
          <div className='checkbox'>
            <p>My Posts:</p>
            <input
              className='checkbox-box searchbar-items'
              type='checkbox'
              value={this.state.userPosts}
              onClick={this.toggleCheckbox}
            />
          </div>
        </div>
        <div className='posts'>
          {posts}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user_id, username, profile_pic } = reduxState.user
  return {
    user_id,
    username,
    profile_pic,
  }
}

export default connect(mapStateToProps)(Dashboard);
