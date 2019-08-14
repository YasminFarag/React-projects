import React, { Component } from 'react';


export default class Square extends Component {

    
/* 
    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.value);
       // const submit =this.props.submit
       //console.log(this.props.player)
        
    }
     */
   
    render() {
        return (
              
                    <button className='resetbtn' onClick={this.props.reset}>Reset</button> 

                   
        )
    }
}
