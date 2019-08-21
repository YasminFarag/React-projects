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
        
        {this.props.arr.map ((item,index)=>{
          return (
            <>
            <h2 key={index}> {item.text}</h2>
            <p >{item.title}</p>
            <p key={index}>{item.content}</p>
</>          
          )
        })}
        <p>{this.props.calender}</p>
      </div>
    );
  }
}

export default ShowCurrentPosts;
