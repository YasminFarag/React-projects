import React, { Component } from 'react'

 class PropSateGrandChild extends Component {
    render() {
        return (
            <div style={{border:"1px solid green "}}>
                <h1>hello I'm the GrandChild</h1>
                <p>The name of my father is : {this.props.name}</p>
                <p>His age is : {this.props.age}</p>
            </div>
        )
    }
}
export default PropSateGrandChild