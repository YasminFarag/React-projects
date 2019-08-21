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
            <span >
            <p key={index}> {item.text}</p>
            <p >{item.title}</p>
            <p key={index}>{item.content}</p>
</span>          
          )
        })}
        {/* <p>{this.props.calender}</p> */}
      </div>
    );
  }
}

export default ShowCurrentPosts;
