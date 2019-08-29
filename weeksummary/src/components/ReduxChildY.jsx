import React, { Component } from 'react';
import {connect} from 'react-redux'

class ReduxChildY extends Component {
    render() {
        return (
            <div>
                <div>ReduxChildY, Y={this.props.y}</div>
                <button onClick={this.props.incrementX}>Increment X</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        y: state.y
})

const mapDispatchToProps = (dispatch) => ({
    incrementX: () => dispatch ({type: 'increment_X'})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxChildY)
