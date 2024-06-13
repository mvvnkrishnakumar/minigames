import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import Game from '../Game'
class MemoryMatrix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameId: 1,
      rows: 3,
      columns: 3,
      activeCellsCount: 3,
      totalScore: 0,
      level: 0,
    }
  }

  createNewGame() {
    this.setState({
      gameId: this.state.gameId + 1,
      rows: this.state.rows + 1,
      columns: this.state.columns + 1,
      activeCellsCount: this.state.activeCellsCount + 1,
      level: this.state.level + 1,
    })
  }

  updateScore(currentGameScore) {
    this.setState({totalScore: this.state.totalScore + currentGameScore})
  }

  render() {
    const {level, totalScore} = this.state
    return (
      <div className="grid-bg">
        <div className="game-rules-align">
          <Link to="/" className="back-text">
            <div className="align">
              <button className="back-button back">
                <BiArrowBack className="left-arrow" />
                Back
              </button>
            </div>
          </Link>
          <div>
            <Popup
              modal
              trigger={<button className="grid-rules-button">Rules</button>}
            >
              {close => (
                <>
                  <div className="close-button-align">
                    <button className="close-button" onClick={() => close()}>
                      <IoMdClose className="left-arrow" />
                    </button>
                  </div>
                  <h1 className="rules-heading">Rules</h1>
                  <ul className="rules-text">
                    <li className="memory-para-popup">
                      In each level of the Game, Users should be able to see the
                      Grid with (N X N)size starting from 3 and the grid will
                      highlight N cells in Blue, the N highlighted cells will be
                      picked randomly.
                    </li>
                    <li className="memory-para-popup">
                      The highlight cells will remain N seconds for the user to
                      memorize the cells. At this point, the user should not be
                      able to perform any action.
                    </li>
                    <li className="memory-para-popup">
                      After N seconds, the grid will clear the N highlighted
                      cells.
                    </li>
                    <li className="memory-para-popup">
                      At N seconds, the user can click on any cell. Clicking on
                      a cell that was highlighted before it will turn blue.
                      Clicking on the other cells that were not highlighted
                      before then will turn to red.
                    </li>
                    <li className="memory-para-popup">
                      The user should be promoted to the next level if they
                      guess al N cells correctly in one attempt.
                    </li>
                  </ul>
                </>
              )}
            </Popup>
          </div>
        </div>
        <div className="grid-align">
          <h1 className="grid-level">Level-{level}</h1>
          <p className="grid-total-score">Total Score: {totalScore}</p>
          <Game
            key={this.state.gameId}
            createNewGame={this.createNewGame.bind(this)}
            rows={this.state.rows}
            columns={this.state.columns}
            activeCellsCount={this.state.activeCellsCount}
            updateTotalScore={this.updateScore.bind(this)}
            totalScore={this.state.totalScore}
          />
        </div>
      </div>
    )
  }
}
export default MemoryMatrix
