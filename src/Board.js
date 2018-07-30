import React from 'react'

class Board extends React.Component {
  render() {
    const status = 'Next player: X'
    return (
      <div>
        <div className ="status">{status}</div>
        <div className="board-row">
        </div>
      </div>
    )
  }
}

export default Board