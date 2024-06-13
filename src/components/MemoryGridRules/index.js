import './index.css'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
const MemoryGridRules = () => (
  <div className="matrix-bg">
    <Link to="/" className="matrix-back-text">
      <div className="matrix-back-align">
        <button className="matrix-back-button matrix-back">
          <BiArrowBack className="matrix-left-arrow" />
          Back
        </button>
      </div>
    </Link>
    <div className="matrix-center">
      <h1 className="matrix-heading">Memory Matrix</h1>
      <img
        src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/zaphelhbkcakwyb4gk7w"
        alt="memory matrix"
      />
    </div>
    <h1 className="matrix-rules-heading">Rules</h1>
    <div className="matrix-align">
      <div>
        <ul>
          <li className="matrix-para">
            In each level of the Game, Users should be able to see the Grid with
            (N X N)size starting from 3 and the grid will highlight N cells in
            Blue, the N highlighted cells will be picked randomly.
          </li>
          <li className="matrix-para">
            The highlight cells will remain N seconds for the user to memorize
            the cells. At this point, the user should not be able to perform any
            action.
          </li>
          <li className="matrix-para">
            After N seconds, the grid will clear the N highlighted cells.
          </li>
        </ul>
      </div>
      <ul>
        <li className="matrix-para">
          At N seconds, the user can click on any cell. Clicking on a cell that
          was highlighted before it will turn blue. Clicking on the other cells
          that were not highlighted before then will turn to red.
        </li>
        <li className="matrix-para">
          The user should be promoted to the next level if they guess al N cells
          correctly in one attempt.
        </li>
      </ul>
    </div>
    <Link to="/matrix">
      <button className="matrix-button">Start playing</button>
    </Link>
  </div>
)
export default MemoryGridRules
