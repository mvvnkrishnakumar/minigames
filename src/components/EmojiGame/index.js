import './index.css'
import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import EmojiNavbar from '../EmojiNavbar'
import EmojiCard from '../EmojiCard'
import EmojiWinOrLoseCard from '../EmojiWinOrLoseCard'
const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]
class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameEnd: false,
    topScore: 0,
    emojis: emojisList,
  }

  getShuffledEmojisList = () => {
    const {emojis} = this.state
    return emojis.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    const {clickedEmojis, emojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojis.length - 1 === clickedEmojis.length) {
        this.finishGameAndSetTopScore(emojis.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojis: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  renderWinOrLose = () => {
    const {clickedEmojis, emojis} = this.state
    const isWon = emojis.length === clickedEmojis.length
    return (
      <EmojiWinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-list">
        {shuffledEmojiList.map(emojiItem => (
          <EmojiCard
            key={emojiItem.id}
            emoji={emojiItem}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameEnd, clickedEmojis, topScore} = this.state
    const currentScore = clickedEmojis.length
    return (
      <div className="app-container">
        <EmojiNavbar
          currentScore={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
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
              trigger={<button className="rules-button">Rules</button>}
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
                    <li className="rules-list">
                      User Should be able to see the list of emojis.
                    </li>
                    <li className="rules-list">
                      When the user clicks any one of the Emoji for the first
                      time, then the count of the score should be increased by 1
                      and the List of emoji cards should be shuffled.
                    </li>
                    <li className="rules-list">
                      This process should repeated every time the user click on
                      emoji card.
                    </li>
                    <li className="rules-list">
                      When the user click on all Emoji cards without clicking
                      any of it twice, then the user will win the game.
                    </li>
                    <li className="rules-list">
                      When the user clicks on the same Emoji for the second
                      time, then the user will lose the game.
                    </li>
                    <li className="rules-list">
                      Once the game is over, the user will be redirected to the
                      results page.
                    </li>
                  </ul>
                </>
              )}
            </Popup>
          </div>
        </div>
        <div className="emoji-body-container">
          {isGameEnd ? this.renderWinOrLose() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
