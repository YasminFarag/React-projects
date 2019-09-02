import React, { Component } from 'react';
import {connect} from 'react-redux';

class CountX extends Component {
    render() {
        return (
            <div>
                <p>X x={this.props.x}</p>
                <button onClick={this.props.incrementy}>Increment Y</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    x: state.x
})


const mapDispatchToProps = (dispatch) => ({
    incrementy : () => dispatch ({type: 'incrementy'})
})



export default connect(mapStateToProps, mapDispatchToProps)(CountX)
