import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';





// ==========================
// Components
// ==========================

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <React.Fragment>
//         <h1>hhhhh</h1>
//         <div className="status h2 text-center">{status}</div>
//         <div className="board">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//         </div>
//       </React.Fragment>
//     );
//   }
// } 


// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();