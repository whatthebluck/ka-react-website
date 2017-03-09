import { connect } from 'react-redux'
import 'isomorphic-fetch'
import { logout, login } from '../store'


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

  }

  handleChange = key => e => this.setState({ [key]: e.target.value});

  // TODO Send though email and pass
  handleLogin = e => {
    e.preventDefault()
    this.props.dispatch(login(this.state.email, this.state.password))
  }

  handleLogout = e => {
    e.preventDefault()
    this.props.dispatch(logout)
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


export default connect(state => state)(Login)