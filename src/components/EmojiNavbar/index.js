import './index.css'
import {Component} from 'react'

class EmojiNavbar extends Component {
  renderScores = () => {
    const {currentScore, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="Score-container">
        <p className="score-label">
          Score : <span className="score-value">{currentScore}</span>
        </p>
        <p className="score-label">
          Total Score : <span className="score-value">{topScore}</span>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="logo"
          />
          <p className="logo-title">Emoji Game</p>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}

export default EmojiNavbar
