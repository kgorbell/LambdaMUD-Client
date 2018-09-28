import React, { Component } from 'react';
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

const Instructions = styled.div`
    width: 100%;
    border: 1px solid black;
    margin: 15px 25px;
    padding-left: 10px;
`;

const Form = styled.form`
    width: 100%;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 45px;
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
`;

const Input = styled.input``;


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.props.setUserData(reqOptions)
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
        console.log(this.props.userData)
        return (
            <Container>
                <Header>Main Screen</Header>
                <Instructions>
                    <p>Welcome, {this.props.userData.name}!</p>
                    <p>If you would like to play Adventure Game, enter 'play' in the input field below.</p>
                </Instructions>
                <Form>
                    <input 
                        type='text'
                        placeholder='User Input'
                        name='userInput'
                        value={this.state.userInput}
                        onChange={this.updateInputChange}
                    />

                    <Link to='/AdvGame/'>Send</Link>
                </Form>

            </Container>
        )
    }
}

export default HomeScreen;


