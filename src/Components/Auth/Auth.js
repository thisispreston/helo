import React from "react"
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../../redux/reducer'


class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleLogin = () => {
    let { username, password } = this.state
    axios
      .post('/api/login', {username, password})
      .then( res => {
        const { user_id, username, profile_pic } = res.data
        this.props.getUser(user_id, username, profile_pic)
        this.props.history.push('/dashboard')
      })
      .catch( err => console.log(err))
  }

  handleRegister = () => {
    let { username, password } = this.state
    axios
      .post('/api/register', {username, password})
      .then( res => {
        const { user_id, username, profile_pic } = res.data
        console.log(res.data)
        this.props.getUser(user_id, username, profile_pic)
        this.props.history.push('/dashboard')
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="auth-body">
        <div className="auth-card">
          <img
            alt='profile pic'
            src="https://www.netclipart.com/pp/m/94-940998_winking-emoji-png-play-button-icon-transparent.png"
            height='150px'
            width='150px'
          />
          <p className='website-name'>HELO</p>
          <input
            maxLength="100"
            placeholder="Enter Username"
            name="username"
            onChange={ e => this.handleInput(e)}
           />
          <input
            type="password"
            maxLength="20"
            placeholder="Enter Password"
            name="password"
            onChange={ e => this.handleInput(e)}
          />
          <div className='auth-buttons'>
            <button
              onClick={() => this.handleLogin()}
            >
              Login
            </button>
            <button
              onClick={() => this.handleRegister()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {getUser})(Auth);
