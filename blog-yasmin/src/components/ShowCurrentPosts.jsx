import React, { Component } from "react";
//import CreateAPost from "./CreateAPost";

class ShowCurrentPosts extends Component {

    
    
  render() {

    console.log(this.props.showResult);
      const result = this.props.showResult.map((item,index)=>(
          <li key={index}>{item}</li>

         
      ))
    return (
      <div>
        <span >hello to show posts</span>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default ShowCurrentPosts;
