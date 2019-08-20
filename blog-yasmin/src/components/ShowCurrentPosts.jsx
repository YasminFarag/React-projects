import React, { Component } from "react";
//import CreateAPost from "./CreateAPost";

class ShowCurrentPosts extends Component {
  data = e => {
    this.setState({
      text: e
    });
  };
  render() {
    //console.log(this.props.showResult);

    /*   const result = this.props.showResult.map((list,index)=>(
          <li key={index}>{list}</li> 
         
       )) ;  */

    return (
      <div>
        <h2>hello to show posts </h2>

        <ul>{}</ul>

        <CreateAPost result={this.data} />
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default ShowCurrentPosts;
