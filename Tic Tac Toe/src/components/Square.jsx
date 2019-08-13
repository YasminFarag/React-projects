import React, { Component } from 'react'

export default class Square extends Component {

    

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.value);
       // const submit =this.props.submit
       console.log(this.props.player)
        
    }
    
   
    render() {
        return (
            <div>
                <h2>Choose player</h2>
                <form onSubmit={this.handleSubmit}>
                   <label>PLayer X</label>
                   <input type="radio" />
                   {/* player O */}
                   <label>PLayer O</label>
                   <input type="radio" />
                    </form>

                    <button onClick={this.props.reset}>Restart </button>

                    </div>
        )
    }
}
