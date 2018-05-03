import React, { Component } from 'react';

import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'andy'
  };

  switchUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.username}
          changed={this.switchUsernameHandler} />

        <UserOutput
          username={this.state.username}
          password="any2" />
        <UserOutput
          username="anyasdasd"
          password="bvccvb" />
      </div>
    );
  }
}

export default App;
