import React, { Component } from 'react';
//import Square from './Square';


export default class Board extends Component {
    constructor(props) {
      super(props);

      this.state={
        board: Array(9).fill('X')
      }
    }

   
    handleClick= (event)=>{
        console.log(event);
        
    }

  
    render() {
     const insideBox= this.state.board.map((box,index)=><div key={index} onClick={this.handleClick}>{box}</div>)
    const status = 'Next player: X';
  
      return (
          <div>
              <div className="status h2 text-center">{status}</div>
        <div className="board">{insideBox}</div>
      
        </div>
      )
      }
    }
  