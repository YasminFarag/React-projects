import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class countX extends Component {
    render() {
        return (
            <div>
                <p>X</p>
                <button>Increment Y</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    x:state.x
}




export default connect(mapStateToProps)(countX)
