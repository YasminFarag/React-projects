import React, { Component } from "react";


class CreateAPost extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "",
          showResult: []
        };
      }
  

  /* handleClick = event => {
    this.setState({
      text: event.target.value
    });
  } */

  handleSubmit = event => {
    event.preventDefault();
    let formValue= document.getElementsByTagName('input')
    console.log(formValue[0].value);
    
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>UserName:
          <input
            type="text"
            /* text={this.state.text}
            onChange={this.handleClick}*/
          />
          </label>
          <br />

          <br />
          <label>Title:
          <input
            type="text"
            /* text={this.state.text}
            onChange={this.handleClick} */
          />
          </label>
          <br />

          <br />


          <label className="box">Content:
          <textarea
            type="text"
            /* text={this.state.text}
            onChange={this.handleClick} */
          />
          </label>
          <br />

          <button type="submit">
            Creat Post
          </button>
        </form>
      </section>
    );
  }
}

export default CreateAPost;
