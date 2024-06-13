import './index.css'
import {Component} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
class EmojiStartPage extends Component {
  render() {
    return (
      <div>
        <div className="app-container">
          <Link to="/" className="back-text">
            <div className="align">
              <button className="back-button back">
                <BiArrowBack className="left-arrow" />
                Back
              </button>
            </div>
          </Link>
          <div className="emoji-align">
            <div className="emoji-rules-card">
              <div className="emoji-align">
                <img
                  src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/emojigamecard"
                  className="emoji-rules-image"
                />
                <div>
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
                  <Link to="/emoji">
                    <div className="button-align">
                      <button className="start-button">Start playing</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default EmojiStartPage
