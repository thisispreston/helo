import React from "react"
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../../redux/reducer'
import './Auth.css'


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

  handleRegister = () => {
    let { username, password } = this.state
    axios
      .post('/api/register', {username, password})
      .then( res => {
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch( err => console.log(err))
  }

  handleLogin = () => {
    let { username, password } = this.state
    axios
      .post('/api/login', {username, password})
      .then( res => {
        this.props.getUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="auth-body">
        <div className="auth-card">
          <img
            alt='logo'
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
