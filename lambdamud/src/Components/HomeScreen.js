import React, { Component } from 'react';
import axios from 'axios';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            userData: {},
            userInput: '',
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('key');
        const reqOptions = {
            headers: {
                Authorization: `Token ${token}`
            }
        };
        axios
            .get('http://localhost:8000/api/adv/init', reqOptions)
            .then(res => {
                this.setState({ userData: res.data })
            })
            .catch(err => {
                console.log(err.response)
            })
    }

    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitUserInput = e => {
        if (this.state.userInput === 'play') {
            
            this.setState({ userInput: '' })
        } else {
            console.log('please input an acceptable action')
        }
    }

    render() {
        console.log(this.state.userData)
        // let ConditionalLink = 
        return (
            <div>
                <h1>Main Screen</h1>
                <div>
                    <p>Welcome, {this.state.userData.name}!</p>
                    <p>If you would like to play Adventure Game, enter 'play' in the input field below.</p>
                </div>
                <form>
                    <input 
                        type='text'
                        placeholder='User Input'
                        name='userInput'
                        value={this.state.userInput}
                        onChange={this.updateInputChange}
                    />

                    <button>Send</button>
                </form>

            </div>
        )
    }
}

export default HomeScreen;


