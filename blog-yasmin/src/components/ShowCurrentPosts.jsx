import React, { Component } from "react";
//import CreateAPost from "./CreateAPost";

class ShowCurrentPosts extends Component {

   
    
  render() {

    console.log(this.props.showResult);
    
    
      /*  let result = this.props.showResult.map((item,index)=>(
          <li key={index}>{item}</li> 
         
       )) ;  */

    return (
      
        <div>
        <h2 tet={this.props.text}>hello to show posts </h2>
        {this.props.showResult && <p>{this.props.showResult}</p>} 

        <ul>{}</ul>
      
        {/* <CreateAPost showPost={this.showPost} /> */}
        </div>
    
    );
  }
}

export default ShowCurrentPosts;
