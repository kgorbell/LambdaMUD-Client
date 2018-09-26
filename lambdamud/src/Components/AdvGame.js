import React, { Component } from 'react';


class AdvGame extends Component {
    constructor() {
        super();
        this.state = {
            UserInput: ''
        }
    }

    render() {
        return (
            <div>
                <div>Adventure</div>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default AdvGame;