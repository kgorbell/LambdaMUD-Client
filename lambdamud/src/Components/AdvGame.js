import React, { Component } from 'react';


class AdvGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserInput: ''
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>Adventure</div>
                <div>
                    <p>{this.props.user.title}</p>
                    <p>{this.props.user.description}</p>
                </div>
            </div>
        )
    }
}

export default AdvGame;