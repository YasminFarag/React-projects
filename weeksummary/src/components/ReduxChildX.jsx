import React, { Component } from 'react';
import {connect} from 'react-redux'


class ReduxChildX extends Component {
    render() {
        return (
            <div>
                <div>ReduxChildX, X={this.props.x}</div>
                <button onClick={this.props.incrementY}>Increment Y</button>
            </div>
        )
    }
}

const mapStateToProps= state => ({
    x: state.x
})

const mapDispatchToProps = (dispatch) => ({
    incrementY: () => (dispatch) ({type: 'increment_Y'})
})

export default connect(mapStateToProps,mapDispatchToProps)(ReduxChildX)
