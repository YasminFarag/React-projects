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
      <div className="result">
        
        {this.props.arr.map ((item,index)=>{
          return (
            <>
            <p  key={index}> {item.text}</p><hr />
            <p >{item.title}</p><hr />
            <p key={index}>{item.content}</p><hr />
            <p>{this.props.calender}</p><hr />
</>          
          )
        })}
          
      </div>
    );
  }
}

export default ShowCurrentPosts;
