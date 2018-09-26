import React, { Component } from 'react';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
        }
    }

    updateInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Main Screen</h1>
                <div>
                    <p>Welcome!</p>
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


