import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();
            this.state = {
                username: '',
                password: '',
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
                        name='password'
                        value={this.state.password}
                        onChange={this.updateInputChange}
                    />
                    <button>Connect</button>
                </form>
            </div>
        )
    }
}

export default Login;