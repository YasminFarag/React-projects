import React, { Component } from "react";
import CreateAPost from "./CreateAPost";

class ShowCurrentPosts extends Component {

   
    
  render() {

    //console.log(this.props.showResult);
    
    
       let result = this.props.showResult.map((item,index)=>(
          <li key={index}>{item}</li> 
          
          

       )) ; 
      
    return (
      
        <div>
        <h2>hello to show posts</h2>

        <ul>{result}</ul>
        {this.props.text}
        <CreateAPost showPost={this.showPost} />
        </div>
    
    );
  }
}

export default ShowCurrentPosts;
