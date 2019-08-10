import React, { Component } from 'react';
//import Square from './Square';


export default class Board extends Component {
    constructor(props) {
      super(props);

      this.state={
        board: Array(9).fill(null),
        player: 'X'
      }
    }

   
    handleClick= (index)=>{

      let board2 = this.state.board
      board2[index]= this.state.player
      let newPlayer = this.state.player === 'X' ? 'O' :'X';

      this.setState({
        board:board2,
        player:newPlayer
      })
        console.log(this.state.board);
        
    }

  
    render() {
     const insideBox= this.state.board.map((box,index)=><div key={index} onClick={()=>
        this.handleClick(index)}>{box}</div>)
    const status = 'Next player: X';
  
      return (
          <div>
              <div className="status h2 text-center">{status}</div>
        <div className="board">{insideBox}</div>
      
        </div>
      )
      }
    }
  