import React, { Component } from "react";
//import ShowCurrentPosts from './ShowCurrentPosts'


class CreateAPost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text:'',
          showResult: []
         
        };
      }
  
    
     

   handleChange = event => {
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

    handleClick =(e)=>{
      console.log(e.target);
      
    }
    
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>UserName:
          <input type="text" /* text={this.state.text} */ onChange={this.handleChange}/>
          </label>
          <br />

          <br />
          <label>Title:
          <input type="text" /* text={this.state.text}*/ onChange={this.handleChange} />
          </label>
          <br />

          <br />


          <label className="box">Content:
          <textarea  type="text" /* text={this.state.text}*/ onChange={this.handleClick} /> 
          </label>
          <br />

          <button type="submit" onClick={this.handleClick}>Creat Post</button>
        </form>
        {/* <ShowCurrentPosts showPost={this.showPost} /> */}
      </section>
    );
  }
}

export default CreateAPost;
