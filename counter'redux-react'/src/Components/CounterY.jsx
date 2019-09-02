import React, { Component } from 'react';
import {connect} from 'react-redux';

 class CounterY extends Component {
    render() {
        return (
            <div>
                <p>Y y={this.props.y}</p>
                <button onClick={this.props.incrementx}>Increment X</button>
                
            </div>
        )
    }
}
 const mapStateToProps = (state)=>({
     y: state.y
 })

 const mapDispatchToProps = (dispatch) =>({
     incrementx: () => (dispatch)({type:'incrementx'

     })

 })

export default connect(mapStateToProps,mapDispatchToProps)(CounterY)