import React, { Component } from "react";
//import CreateAPost from "./CreateAPost";

class ShowCurrentPosts extends Component {
  render() {
    //console.log(this.props.showResult);

    /*   const result = this.props.showResult.map((list,index)=>(
          <li key={index}>{list}</li> 
         
       )) ;  */
        console.log(this.props.arr);
        
    return (
      <div>
        {this.props.arr.map (item=>{
          return (
            <>
            <h2> {item.text}</h2>
            <p>{item.title}</p>
            <p>{item.content}</p>
</>          
          )
        })}
        
      </div>
    );
  }
}

export default ShowCurrentPosts;
