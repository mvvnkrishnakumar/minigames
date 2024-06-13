import './index.css'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
const MemoryCardRules = () => (
  <div className="memory-bg">
    <Link to="/" className="memory-back-text">
      <div className="memory-back-align">
        <button className="memory-back-button memory-back">
          <BiArrowBack className="memory-left-arrow" />
          Back
        </button>
      </div>
    </Link>
    <div className="memory-center">
      <img
        src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/zm0c9ayvbkgygkm3jz0j"
        alt="memory card flip"
      />
    </div>
    <h1 className="memory-rules-heading">Rules</h1>
    <ul>
      <li className="memory-para">
        When the game is started, the users should be able to see the list of
        Cards that are shuffled and turned face down.
      </li>
      <li className="memory-para">
        If the two cards have the same image, they remain face up. If not, they
        should be flipped face down again after a sgort 1 second.
      </li>
      <li className="memory-para">
        Users should be able to compare only two cards at a time.
      </li>
    </ul>
    <Link to="/memory">
      <button className="memory-button">Start playing</button>
    </Link>
  </div>
)
export default MemoryCardRules
