import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Login from './component/login';
import { Provider } from 'react-redux';
import { makeStore } from './store/';

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
