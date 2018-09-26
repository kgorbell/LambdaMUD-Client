import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Registration'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </div>
    );
  }
}

export default App;
