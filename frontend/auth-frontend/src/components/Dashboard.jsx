import React, { Component } from 'react';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>{this.props.state.loggedInStatus}</h1>
                <h1>Dashboard</h1>
            </div>
        )
    }
}