import React, { Component } from 'react';
import ReduxChildX from './ReduxChildX'
import ReduxChildY from './ReduxChildY';

class ReduxParent extends Component {
    render() {
        return (
            <div>
                <h1>Hello World !</h1>
                <ReduxChildX />
                <ReduxChildY />
            </div>
        )
    }
}

export default ReduxParent
