import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    massage: '',
  }

  successLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.successLogin()
    } else {
      this.setState({massage: data.error_msg})
    }
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, massage} = this.state
    return (
      <div className="loginContainer">
        <div>
          <img
            className="loginImage"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <div>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form className="input-container">
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="username"
              value={username}
              placeholder="Username"
              onChange={this.getUsername}
            />
            <br />

            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              value={password}
              id="password"
              placeholder="Password"
              onChange={this.getPassword}
            />
            <br />
            <button onClick={this.submitForm} type="submit">
              Login
            </button>
            <p className="message">{massage}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
