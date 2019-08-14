import React, { Component } from 'react';
import Square from './Square';




export default class Board extends Component {
    constructor(props) {
      super(props);

      this.state={

        // create an Array with 9 boxes
        board: Array(9).fill(null),

        // player
        player: 'X',
        theWinner: 'X'
      
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

        
        
        //console.log(this.state.board);
        
        if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
          alert('you won');
      
        }
      }
    }

    handleClick= (index)=>{

      let board2 = this.state.board
      if(this.state.board[index] === null ){
      board2[index]= this.state.player
      let newWinner= this.state.theWinner
        console.log('winner is ',newWinner);

      // switch players
      let newPlayer = this.state.player === 'X' ? 'O' :'X';

      this.setState({
        board:board2,
        player:newPlayer,
        theWinner:newWinner
       
      })

      if(this.state.theWinner === 'X'){
        console.log('x');
        
      }else{
        this.state.theWinner === 'O' 
      }


      if(this.state.player === 'X'){
        //console.log(('X'));
        
      }else if (this.state.player === 'O') {
       // console.log('O');
        
        
      }

       this.whoIsWinner();

    } 
       //console.log(this.state.board);
        
    }

     restart=()=>{
      //console.log('reset');
      
       let newArray= this.state.board;
      newArray=Array(9).fill(null)
      this.setState({
        board: newArray,

        // player
        player: 'X',
      })
 
    }
    
    
    render(){
     const insideBox= this.state.board.map((box,index)=><div key={index} onClick={()=>
        this.handleClick(index)}>{box}</div>)
        const status =`Next PLayer ${this.state.player}`
        const result = `Winner is ${this.state.theWinner}`
  
      return (
          <div>
       
              <div className="status h2 text-center " onClick={this.handleClick}>{status}</div>
              <div>{result}</div>
        <div className="board ">{insideBox}</div>
         <Square reset={this.restart}  />
        </div>
      )
      }
    
}