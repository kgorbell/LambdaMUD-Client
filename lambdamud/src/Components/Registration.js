import React, {Component} from 'react';

class Register extends Component {
    constructor() {
        super();
            this.state = {
                username: '',
                password1: '',
                password2: '',
            }
    }

    updateInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Login Screen</h1>
                <form>
                    <input
                        type='text'
                        placeholder='Login'
                        name='username'
                        value={this.state.username}
                        onChange={this.updateInputChange}
                    />
                    <input
                        type='text'
                        placeholder='Password'
                        name='password1'
                        value={this.state.password1}
                        onChange={this.updateInputChange}
                    />
                    <input
                        type='text'
                        placeholder='Password'
                        name='password2'
                        value={this.state.password2}
                        onChange={this.updateInputChange}
                    />
                    <button>Connect</button>
                </form>
            </div>
        )
    }
}

export default Register;