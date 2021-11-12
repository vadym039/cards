/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width': '60px',
  'height': '60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white',
  'cursor': 'pointer'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      turned: ''
    }
  }

  render() {
    return (
      <div
        onClick={() => {
          if (this.props.winner !== false) {
            return
          }
          const newVal = this.props.cells[this.props.num] === ''
            ? ((Number(this.props.player) === 0) ? 'X' : 'O')
            : this.props.cells[this.props.num];

          this.props.chengeCell(this.props.num, newVal)
          this.props.handleClick(this.props.line, this.props.col)
        }}
        className="square"
        style={squareStyle}>
        {this.props.cells[this.props.num] || ''}
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lines: [[], [], []],
      winner: false,
      turn: 0,
      player1: [],
      player2: [],
      cells: Array(9).fill('')
    }
    this.handleClickSquare = this.handleClickSquare.bind(this);
  }

  handleClickSquare = (line, col) => {
    if (this.state.winner !== false) {
      return
    }

    if (this.state.lines[line]
      && this.state.lines[line][col] === undefined) {
      const linesL = [...this.state.lines]
      linesL[line][col] = this.state.turn
      this.checkedLines(linesL)
      this.setState({ lines: linesL })
    } else {
      return
    }

    if (this.state.turn === 0) {
      this.setState({ turn: 1 })
    } else {
      this.setState({ turn: 0 })
    }
  }

  chengeCell = (num, val) => {
    const newCells = this.state.cells
    newCells[num] = val
    this.setState({ cells: newCells })
  }

  checkedLines = (linesL) => {
    const checked1 = []
    const checked2 = []

    for (const key in linesL) {
      const element = linesL[key]
      let checkCol1 = []
      let checkCol2 = []
      for (const locKey in element) {
        const el = element[locKey]
        if (el === 0) {
          checkCol1[locKey] = 0
        } else if (el === 1) {
          checkCol2[locKey] = 1
        }
      }
      checked1.push(checkCol1)
      checked2.push(checkCol2)

      let temp1 = 0
      for (const key in checkCol1) {
        if (checkCol1[key] === 0) {
          temp1 = temp1 + 1
        }
      }
      if (temp1 === 3) {
        this.setState({ winner: 0 })
      }

      let temp2 = 0
      for (const key in checkCol2) {
        if (checkCol2[key] === 0) {
          temp2 = temp2 + 1
        }
      }
      if (temp2 === 3) {
        this.setState({ winner: 0 })
      }
    }
    console.log(checked2)
    const verticalWin = []
    if (checked1[0][0] === 0
      && checked1[1][0] === 0
      && checked1[2][0] === 0) {
      this.setState({ winner: 0 })
    }
    if (checked1[0][1] === 0
      && checked1[1][1] === 0
      && checked1[2][1] === 0) {
      this.setState({ winner: 0 })
    }

    if (checked1[0][2] === 0
      && checked1[1][2] === 0
      && checked1[2][2] === 0) {
      this.setState({ winner: 0 })
    }

    if (checked1[0][0] === 0
      && checked1[1][1] === 0
      && checked1[2][2] === 0) {
      this.setState({ winner: 0 })
    }
    if (checked1[0][2] === 0
      && checked1[1][1] === 0
      && checked1[2][0] === 0) {
      this.setState({ winner: 0 })
    }


    if (checked2[0][0] === 1
      && checked2[1][0] === 1
      && checked2[2][0] === 1) {
      this.setState({ winner: 1 })
    }
    if (checked2[0][1] === 1
      && checked2[1][1] === 1
      && checked2[2][1] === 1) {
      this.setState({ winner: 1 })
    }

    if (checked2[0][2] === 1
      && checked2[1][2] === 1
      && checked2[2][2] === 1) {
      this.setState({ winner: 1 })
    }

    if (checked2[0][0] === 1
      && checked2[1][1] === 1
      && checked2[2][2] === 1) {
      this.setState({ winner: 1 })
    }
    if (checked2[0][2] === 1
      && checked2[1][1] === 1
      && checked2[2][0] === 1) {
      this.setState({ winner: 1 })
    }
  }

  resetState = () => {
    this.setState({
      lines: [[], [], []],
      winner: false,
      turn: 0,
      player1: [],
      player2: [],
      cells: Array(9).fill('')
    })
  }

  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{this.state.turn === 0 ? 'X' : 'O'}</span></div>
        <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{this.state.winner === 0 ? 'X' : (this.state.winner !== false ? 'O' : 'None')}</span></div>
        <button style={buttonStyle} onClick={this.resetState}>Reset</button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square line='0' col='0' chengeCell={this.chengeCell} cells={this.state.cells} num={0} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
            <Square line='0' col='1' chengeCell={this.chengeCell} cells={this.state.cells} num={1} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
            <Square line='0' col='2' chengeCell={this.chengeCell} cells={this.state.cells} num={2} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square line='1' col='0' chengeCell={this.chengeCell} cells={this.state.cells} num={3} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
            <Square line='1' col='1' chengeCell={this.chengeCell} cells={this.state.cells} num={4} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
            <Square line='1' col='2' chengeCell={this.chengeCell} cells={this.state.cells} num={5} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square line='2' col='0' chengeCell={this.chengeCell} cells={this.state.cells} num={6} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
            <Square line='2' col='1' chengeCell={this.chengeCell} cells={this.state.cells} num={7} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
            <Square line='2' col='2' chengeCell={this.chengeCell} cells={this.state.cells} num={8} winner={this.state.winner} player={this.state.turn} handleClick={this.handleClickSquare} />
          </div>
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
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

export default Board;