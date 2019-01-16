import React, { Component } from 'react';
import './App.css';
import UserDisplay from './user-display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>USERS USERS USERS HOME</h1>
        </header>
        <UserDisplay/>
      </div>
    );
  }
}

export default App;
