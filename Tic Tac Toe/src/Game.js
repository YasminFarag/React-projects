import React, { Component } from 'react';
import Board from './components/Board';
import './styles/index.css';
import './sass/index.scss';
import Square from './components/Square'

class Game extends Component {
    render() {
      return (
        <article className="game container mt-5">
          <section className="row">
            <div className="col-sm-8 game-board">
              <Board />
              <Square />
            </div>
            <div className="col-sm-4 game-info">
              <p className="h2">{/* status */}
               </p>
              <ul className="nav nav-pills flex-column">
                {/* TODO */}
              </ul>
            </div>
          </section>
        </article>
      );
    }
  }  

export default Game;
