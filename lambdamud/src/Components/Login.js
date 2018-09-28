import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    font-size: 18px;
    padding-left: 15px;
    line-height: 45px;
`;

const Content = styled.form`
    width: 100%;
    margin-top: 32px;
    margin-bottom: 40px;
    padding-left: 20px;
`;

const Input = styled.input`
    width: 400px;
    padding-left: 10px;
    border: 1px solid black;
    font-size: 18px;
    line-height: 36px;
    margin-right: 300px;
    margin-bottom: 30px;
`;

class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
                username: '',
                password: '',
            }
    }

    updateInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // LoginUser = e => {
    //     const User = {
    //         username: this.state.username,
    //         password: this.state.password
    //     }
    //     axios
    //         .post('http://localhost:8000/api/login', User)
    //         .then(res => {
    //             localStorage.setItem('key', res.data.key)
    //         })
    //         .catch(err => console.log(err))
    //     this.setState({ username: '', password: ''})
    // }

    render() {
        return (
            <Container>
                <Header>Login Screen</Header>
                <Content>
                    <Input
                        type='text'
                        placeholder='Login'
                        name='username'
                        value={this.state.username}
                        onChange={this.updateInputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.updateInputChange}
                    />
                    <Link 
                        to='/HomeScreen' 
                        onClick={() => this.props.loginUser(this.state)}
                        style={{ 
                            textDecoration:'none', 
                            width: '100%', 
                            border:'1px solid black', 
                            padding: '18px 38px',
                            borderRadius: '10px',
                        }}
                    >
                        Connect
                    </Link>
                </Content>
            </Container>
        )
    }
}

export default Login;