import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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

    registerUser = e => {
        if (this.state.password1 !== this.state.password2) {
            console.log('The passwords do not match.')
        } else {
            const User = {
                username: this.state.username,
                password: this.state.password1
            }
            axios
                .post('', User)
                .then(res => {
                    console.log('success')
                })
                .catch(err => console.log(err.response))
            this.setState({ username: '', password1: '', password2: ''})
        }
    }

    render() {
        return (
            <Container>
                <Header>Create Account Screen</Header>
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
                        name='password1'
                        value={this.state.password1}
                        onChange={this.updateInputChange}
                    />
                    <Input
                        type='text'
                        placeholder='Password'
                        name='password2'
                        value={this.state.password2}
                        onChange={this.updateInputChange}
                    />
                    <Link
                        to='/HomeScreen'
                        onClick={this.registerUser} 
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

export default Register;