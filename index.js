import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Login from './component/login';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Log In - App'
    };
  }

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

render(<Provider store={makeStore()}>
<App />
</Provider>, document.getElementById('root'));
