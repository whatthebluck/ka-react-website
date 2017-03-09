import React from 'react'
import { connect } from 'react-redux'
import * as actions from './LoginActions'


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }


  handleChange = key => e => this.setState({ [key]: e.target.value});


  handleLogin = e => {
    e.preventDefault()
    this.props.dispatch(actions.login(this.state.email, this.state.password))
  }


  render() {
    if(!this.props.loggedIn) {
      return (
        <div>
          <form method="POST" onSubmit={this.handleLogin}>
            <input type="text" name="email" onChange={this.handleChange('email')} value={this.state.email}/>
            <input type="password" name="password" onChange={this.handleChange('password')} value={this.state.password}/>
            <input type="submit" value="Log in"/>
          </form>
          { this.props.loginError && <span>{this.props.loginError}</span>}
        </div>
      )
    }

    if(this.props.loggedIn) {
      return (
        <div>You are logged in. <a href="#" onClick={this.handleLogout}>Logout</a></div>
      )

    }
  }

}
// container part
function mapStateToProps(state) {
  return {...state.login};
}

export default connect(mapStateToProps)(Login);