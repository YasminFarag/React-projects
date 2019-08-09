import React, { Component } from 'react'

 class ToDoForm extends Component {

       // textInput= React.createRef();

       
    state= {
        inputText: null,
        ToDoItems :[]
    }

    handleInputChange = event =>{
        const inputText = event.target.value;
        this.setState({inputText:inputText

        })
        console.log('text input',inputText);
        
    }
    handleSubmit= (event) =>{
        /* we prevent the submit from doing the default (sending the form and reloading it) */
        event.preventDefault();
        console.log('create and event:')
       // console.log('create an event',this.textInput);
        //console.log('create an event',this.textInput.current.value);
        this.setState(prevState =>({
            ToDoItems: [...prevState.ToDoItems,this.state.inputText]
        }))
        
    }
    render() {
        return (
            <React.Fragment>
            <form className="input-group m-2"
            onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Add something" onChange={this.handleInputChange}
                    />

                    <button type="submit" className="btn btn-outline-warning">
                        <i className="fas -fa-plus" aria-hidden="true"></i>Add
                        </button>
          </form>
          {/* shortcircuit */}

          {this.state.inputText && <p>Typing:{this.state.inputText}</p>}


          {this.state.ToDoItems.map((item,index) => <li key={index}>{item}</li>)}
          </React.Fragment>
        )
    }
}

export default ToDoForm;
