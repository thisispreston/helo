import React from "react";
import './Dashboard.css'
import axios from 'axios'
import Post from '../Post/Post'
import { connect } from 'react-redux'
import { getUser } from '../../redux/reducer'


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
    axios
      .get('/api/posts')
      .then( res => {
        this.setState({
          posts: res.data,
        })
      })
      .catch( err => console.log(err))
  }

  resetSearch = () => {
    this.getPosts()
  }

  handleClick = () => {
    this.props.history.push('/view-post')
  }

  render() {
    let posts = this.state.posts.map( e => {
      return (
        <Post
          key={e.author_id}
          id={e.author_id}
          img={e.img}
          title={e.title}
          content={e.content}
          onClick={this.handleClick}
          // delete={this.delete}
          // toEditForm={this.toEditForm}
        />
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
              // onClick={}
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

export default connect(null, {getUser})(Dashboard);
