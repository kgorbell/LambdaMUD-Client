import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Registration';
import HomeScreen from './Components/HomeScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/HomeScreen'component={HomeScreen}/>
      </div>
    );
  }
}

export default App;
