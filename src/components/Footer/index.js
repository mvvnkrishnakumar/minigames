import {Component} from 'react'
import './index.css'
class Footer extends Component {
  remainingCount() {
    if (this.props.gameState !== 'recall') {
      return null
    }
    return (
      <div className="remaining-count">
        {this.props.activeCellsCount - this.props.correctGuesses.length}
      </div>
    )
  }

  playAgainButton() {
    if (~['won', 'lost'].indexOf(this.props.gameState)) {
      return (
        <button className="play-again-button" onClick={this.props.playAgain}>
          Play Again
        </button>
      )
    }
  }

  render() {
    return (
      <div className="footer">
        {this.remainingCount()}
        {this.playAgainButton()}
        <br />
      </div>
    )
  }
}

export default Footer
