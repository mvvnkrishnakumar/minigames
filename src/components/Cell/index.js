import {Component} from 'react'
import './index.css'
class Cell extends Component {
  active() {
    return ~this.props.activeCells.indexOf(this.props.id)
  }

  handleClick() {
    if (this.guessState() === undefined && this.props.gameState === 'recall') {
      this.props.recordGuess({
        cellId: this.props.id,
        userGuessIsCorrect: this.active(),
      })
    }
  }

  guessState() {
    if (~this.props.correctGuesses.indexOf(this.props.id)) {
      return true
    } else if (~this.props.wrongGuesses.indexOf(this.props.id)) {
      return false
    }
  }

  showActiveCells() {
    return ~['memorize', 'lost'].indexOf(this.props.gameState)
  }
  render() {
    let className = 'cell'
    if (this.showActiveCells() && this.active()) {
      className += ' active'
    }
    className += ' guess-' + this.guessState()
    return (
      <div className={className} onClick={this.handleClick.bind(this)}></div>
    )
  }
}

export default Cell
