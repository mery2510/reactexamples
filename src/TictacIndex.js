import React from 'react';
import ReactDOM from 'react-dom/client';
import './tictac.css';

function Square(props){
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}


// Square’in render metodundaki onClick metodundan, this.setState‘in çağrılmasını sağladık. 
// Bu sayede Square’deki <button> elemanına her tıklandığında React, Square bileşenini tekrar render edecektir. 
// Güncelleme sonrasında Square’in this.state.value değerine 'X' ataması gerçekleşecektir, 
// ve bu sayede oyun tahtasında ‘X”i göreceğiz. Herhangi bir Square bileşenine tıklandığı anda içerisinde ‘X’ görüntülenecektir.
  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state= {
        squares: Array(9).fill(null),
        xIsNext: true, //Oyuna varsayılan olarak “X” başlıyor. X’in ilk başlayıp/başlamayacağını Board’un constructor’ındaki başlangıç state’inde belirledik.
      };
    }
    handleClick(i){
      const squares = this.state.squares.slice();
      if(calculateWinner(squares)  || squares[i]){
        return;
      }
      squares[i]= this.state.xIsNext ?  'X': 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext
      });
    }
    renderSquare(i) {
      return <Square value= {this.state.squares[i]}
      onClick={() => this.handleClick(i)}
       />;
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = 'Winner ' + winner;
      }
      else {
        status = 'NEXT PLAYER: ' + (this.state.xIsNext ? 'X': 'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);

  function calculateWinner (squares){
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    for (let i=0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
//9 kareden oluşan bir dizi göz önüne alındığında, bu fonksiyon kazananı kontrol edecek ve uygun şekilde 'X', 'O' veya null döndürecektir.

  export {
    Board,
    Game,
    Square
  }


