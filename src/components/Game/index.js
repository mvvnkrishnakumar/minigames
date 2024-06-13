import {Component} from 'react'
import Row from '../Row'
import Cell from '../Cell'
import Footer from '../Footer'
import _ from 'lodash'

class Game extends Component {
  constructor(props) {
    super(props)
    this.matrix = []
    this.perfectScore = 3
    for (let r = 0; r < this.props.rows; r++) {
      let row = []
      for (let c = 0; c < this.props.columns; c++) {
        row.push(`${r}${c}`)
      }
      this.matrix.push(row)
    }

    let flatMatrix = _.flatten(this.matrix)
    this.activeCells = _.sampleSize(flatMatrix, this.props.activeCellsCount)

    this.state = {
      gameState: 'ready',
      wrongGuesses: [],
      correctGuesses: [],
    }
  }

  recordGuess({cellId, userGuessIsCorrect}) {
    let {wrongGuesses, correctGuesses, gameState} = this.state
    if (userGuessIsCorrect) {
      correctGuesses.push(cellId)
      if (correctGuesses.length === this.props.activeCellsCount) {
        gameState = this.finishGame('won')
      }
    } else {
      wrongGuesses.push(cellId)
      if (wrongGuesses.length > this.props.allowedWrongAttempts) {
        gameState = this.finishGame('lost')
      }
    }
    this.setState({correctGuesses, wrongGuesses, gameState})
  }

  startRecallMode() {
    this.setState({gameState: 'recall'}, () => {
      this.secondsRemaining = this.props.timeoutSeconds
      this.playTimerId = setInterval(() => {
        if (--this.secondsRemaining === 0) {
          this.setState({gameState: 'lost'})
        }
      }, 1000)
    })
  }

  finishGame(gameState) {
    if (gameState === 'won') {
      this.calculateScore()
    }
    clearInterval(this.playTimerId)
    return gameState
  }

  calculateScore() {
    let score = this.perfectScore
    score -= this.state.wrongGuesses.length
    if (this.secondsRemaining >= 5) {
      score *= 2
    }
    this.props.updateTotalScore(score)
  }

  componentDidMount() {
    this.memorizeTimerId = setTimeout(() => {
      this.setState({gameState: 'memorize'}, () => {
        this.recallTimerId = setTimeout(this.startRecallMode.bind(this), 2000)
      })
    }, 2000)
  }
  componentWillUnmount() {
    clearTimeout(this.memorizeTimerId)
    clearTimeout(this.recallTimerId)
    this.finishGame()
  }
  render() {
    return (
      <div className="grid">
        {this.matrix.map((row, ri) => (
          <Row key={ri}>
            {row.map(cellId => (
              <Cell
                key={cellId}
                id={cellId}
                activeCells={this.activeCells}
                {...this.state}
                recordGuess={this.recordGuess.bind(this)}
              />
            ))}
          </Row>
        ))}
        <Footer
          {...this.state}
          playAgain={this.props.createNewGame}
          activeCellsCount={this.props.activeCellsCount}
          score={this.props.totalScore}
        />
      </div>
    )
  }
}

Game.defaultProps = {
  allowedWrongAttempts: 2,
  timeoutSeconds: 10,
}
export default Game
