import React from 'react';
import { connect } from 'react-redux';

export default class LoginComponent extends React.Component {
  state = { username: '', password: '' };

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }
  login = async () => {
     this.props.add(this.state);
  }

  render() {
    return (
      <div>
        Username<input type="text" value={this.state.username} onChange={this.handleUsernameChange} /> <br/>
        Password<input type="text" value={this.state.username} onChange={this.handlePasswordChange} /><br/>
        <button onClick={this.login}>ADD</button>
      </div>
    )
  }

}
export default connect(null, { login })(LoginComponent)