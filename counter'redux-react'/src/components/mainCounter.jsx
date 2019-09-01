import React, { Component } from 'react'
import countX from './countX';
import counterY from './counterY';

export default class mainCounter extends Component {
    render() {
        return (
            <div>
                <countX />
                <counterY />
                
            </div>
        )
    }
}
