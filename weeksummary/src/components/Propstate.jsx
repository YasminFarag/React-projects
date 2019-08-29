import React, { Component } from 'react';
import PropStateChild1 from './PropStateChild1'

class Propstate extends Component {

    state= {
        name:'Sven',
        ageChild :null
    }

    changeAge =(newState)=>{
        this.setState({
            ageChild: newState
        })
    }

    componentDidMount(){
        console.log('didMount', this.state.name);
        
        this.setState({
            name:'Timmy'
        })
    }
    render() {
        return (
            <div className="propstate" style={{border:"1px solid red "}}>
            <h1>I'm the father</h1>
                <p> We have a child with the Name: {this.state.name}</p>
                <p> his age is: {this.state.ageChild}</p>
                <PropStateChild1 userName={this.state.name} 
                                 age={this.state.ageChild}
                                 changeAgeFunc={this.changeAge}/>
            </div>
        )
    }
}

export default Propstate
