import React, { Component } from 'react';
import {Square} from './index.js';

export default class Board extends React.Component {
    constructor(props) {
      super(props);

      
    }

   
    handleClick= (event)=>{

    }

  
    render() {
     const box= this.state.board.map((box,index)=><div className="box" key={index} onClick={this.handleClick}>{box}</div>)
      const status = 'Next player: X';
  
      return (


        <div className="box">{box}</div>
      )
      }
    }
  
