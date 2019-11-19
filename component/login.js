import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';

export default class LoginComponent extends React.Component {
  state = { username: '', password: '' };

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }
  login = async () => {
     this.props.login(this.state);
  }

  render() {
    return (
      <div>
        Username : <input type="text" value={this.state.username} onChange={this.handleUsernameChange} /> <br/><br/>
        Password : <input type="text" value={this.state.password} onChange={this.handlePasswordChange} /><br/><br/>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }

}
export default connect(null, { login })(LoginComponent)