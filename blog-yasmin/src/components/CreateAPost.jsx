import React, { Component } from "react";
//import ShowCurrentPosts from './ShowCurrentPosts'


class CreateAPost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text:null,
          showResult: []
         
        };
      }
  
    
     

   handleClick = event => {
       const inputTxt = event.target.value
    this.setState({
      text: inputTxt
      
      
    });
    //console.log(inputTxt, 'input');
  } 

  handleSubmit = event => {
    event.preventDefault();
    let formValue= document.getElementsByTagName('input')
    console.log(formValue[0].value); 
    console.log(this.state); 
     
    this.setState(newState =>({
      showResult:[...newState.showResult, this.state.text]
    }));

        
    }
    
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>UserName:
          <input type="text" text={this.state.text} onChange={this.handleClick}/>
          </label>
          <br />

          <br />
          <label>Title:
          <input type="text" /* text={this.state.text}*/ onChange={this.handleClick} />
          </label>
          <br />

          <br />


          <label className="box">Content:
          <textarea
            type="text" text={this.state.value} /* text={this.state.text}*/ onChange={this.handleClick} />
          </label>
          <br />

          <button type="submit">Creat Post</button>
        </form>
        {/* <ShowCurrentPosts showPost={this.showPost} /> */}
      </section>
    );
  }
}

export default CreateAPost;
