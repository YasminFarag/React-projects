import React, { Component } from 'react';
//import { log } from 'util';
//import Square from './Square';


export default class Board extends Component {
    constructor(props) {
      super(props);

      this.state={

        // create an Array with 9 boxes
        board: Array(9).fill(null),

        // player
        player: 'X'
      }
    }

    whoIsWinner=()=>{
      let winner= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      for (let i = 0; i < winner.length; i++) {
        const [a,b,c] = winner[i];
        console.log(this.state.board);
        
        if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
          alert('you won');
      
        }

        
    
        
      }
    }



   
    handleClick= (index)=>{

      let board2 = this.state.board
      if(this.state.board[index] === null ){
      board2[index]= this.state.player

      // switch players
      let newPlayer = this.state.player === 'X' ? 'O' :'X';

      this.setState({
        board:board2,
        player:newPlayer
      })

       this.whoIsWinner();

    } 
       //console.log(this.state.board);
      
        
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
  