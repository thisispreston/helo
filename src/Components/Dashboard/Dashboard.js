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

  getPosts = () => {
    const { searchInput, userPosts } = this.state
    const { user_id } = this.props

    axios
      .get(`/api/posts/${user_id}?searchInput=${searchInput}&userPosts=${userPosts}`)
      .then( res => {
        console.log(res.data)
        this.setState({
          posts: res.data,
        })
      })
      .catch( err => console.log(err))
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  toggleCheckbox = async () => {
    await this.setState({
      userPosts: !this.state.userPosts
    })
    this.getPosts()
  }

  resetSearch = async () => {
    await this.setState({
      searchInput: '',
    })
    this.getPosts()
  }

  handleClick = (id) => {
    this.props.history.push(`/view-post/`)
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
              value={this.state.searchInput}
              onChange={ e => this.handleInput(e)}
            />
            <img
              alt="search button"
              className='search-button searchbar-items'
              src="https://image.flaticon.com/icons/svg/49/49116.svg"
              height='35px'
              width='35px'
              onClick={this.getPosts}
            />
            <button
              className='reset searchbar-items'
              onClick={this.resetSearch}
            >
              Reset
            </button>
          </div>
          <div className='checkbox'>
            <p>My Posts:</p>
            <input
              className='checkbox-box searchbar-items'
              type='checkbox'
              checked={this.state.userPosts}
              onChange={this.toggleCheckbox}
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
