import React, { Component } from 'react';
import PropSateGrandChild from './PropSateGrandChild';


class PropStateChild1 extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <div style={{border:"1px solid blue "}}>
                <h1>hello I'm the child</h1>
                <p>My name is: {this.props.userName}</p>
                <p>I'm  {this.props.age} years old</p>
                <input type="text"
                 name="ageChild"
                 placeholder="please enter your age!"
                 onChange={(e)=>{this.props.changeAgeFunc(e.target.value)}} />

                 <PropSateGrandChild name={this.props.userName} age ={this.props.age}/>
            </div>
        )
    }
}

export default PropStateChild1
