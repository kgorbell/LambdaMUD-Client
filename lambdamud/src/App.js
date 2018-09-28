import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Registration';
import HomeScreen from './Components/HomeScreen';
import AdvGame from './Components/AdvGame'
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    }
  }


  loginUser = (state) => {
    axios
        .post('http://localhost:8000/api/login', state)
        .then(res => {
            localStorage.setItem('key', res.data.key)
        })
        .catch(err => console.log(err))
    this.setState({ username: '', password: ''})
}

setUserData = (reqOptions) => {
  axios
    .get('http://localhost:8000/api/adv/init', reqOptions)
    .then(res => {
        this.setState({ userData: res.data })
    })
    .catch(err => {
        console.log(err.response)
    })
}

  render() {
    return (
      <div className="App">
        <Route path='/login' render={(props) => (
          <Login loginUser={this.loginUser}/>
        )} />
        <Route path='/register' component={Register}/>
        <Route path='/HomeScreen'render={(props) => (
          <HomeScreen setUserData={this.setUserData} userData={this.state.userData}/>
        )}/>
        <Route path='/AdvGame'render={(props) => (
          <AdvGame user={this.state.userData}/>
        )}/>
      </div>
    );
  }
}

export default App;
