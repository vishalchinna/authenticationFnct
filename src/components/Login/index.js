import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  getLoginPage = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="bg">
        <h1>Please Login</h1>
        <button onClick={this.getLoginPage} type="button">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
