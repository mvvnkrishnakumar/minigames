import './index.css'
import {BiArrowBack} from 'react-icons/bi'
import {Link} from 'react-router-dom'
const RpsRulesPage = () => (
  <div className="rps-bg">
    <Link to="/" className="rps-back-text">
      <div className="rps-back-align">
        <button className="rps-back-button rps-back">
          <BiArrowBack className="rps-left-arrow" />
          Back
        </button>
      </div>
    </Link>
    <div className="rps-center">
      <h1 className="rps-heading">Rock Paper Scissor</h1>
      <img
        src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/rp0bwgi9kwc3nmhhonws"
        alt="rock paper scissor"
      />
    </div>
    <h1 className="rps-rules-heading">Rules</h1>
    <div className="rps-align">
      <div>
        <ul>
          <li className="rps-para">
            The game result should be based on user and user opponent choices
          </li>
          <li className="rps-para">
            When the user choice is rock and his opponent choice is rock then
            the result will be
            <span className="rps-span"> IT IS DRAW</span>
          </li>
          <li className="rps-para">
            When the user choice is paper and his opponent choice is rock then
            the result will be
            <span className="rps-span"> YOU WON</span>
          </li>
          <li className="rps-para">
            When the user choice is scissosr and his opponent choice is rock
            then the result will be
            <span className="rps-span"> YOU LOSE</span>
          </li>
          <li className="rps-para">
            When the user choice is paper and his opponent choice is paper then
            the result will be
            <span className="rps-span"> IT IS DRAW</span>
          </li>
          <li className="rps-para">
            When the user choice is scissosrs and his opponent choice is paper
            then the result will be
            <span className="rps-span"> YOU WON</span>
          </li>
        </ul>
      </div>
      <ul>
        <li className="rps-para">
          When the user choice is rock and his opponent choice is scissosrs then
          the result will be
          <span className="rps-span"> YOU WON</span>
        </li>
        <li className="rps-para">
          When the user choice is paper and his opponent choice is scissosrs
          then the result will be
          <span className="rps-span"> YOU LOSE</span>
        </li>
        <li className="rps-para">
          When the user choice is scissosrs and his opponent choice is scissosrs
          then the result will be
          <span className="rps-span"> IT IS DRAW</span>
        </li>
        <li className="rps-para">
          When the result is <span className="rps-span">YOU WON</span>, then the
          count of the score will be increased by 1
        </li>
        <li className="rps-para">
          When the result is <span className="rps-span">IT IS DRAW</span>, then
          the count of the score should be the same
        </li>
        <li className="rps-para">
          When the result is <span className="rps-span">YOU LOSE</span>, then
          the count of the score will be decreased by 1
        </li>
      </ul>
    </div>
    <Link to="/rock-paper-scissors">
      <button className="rps-button">Start playing</button>
    </Link>
  </div>
)
export default RpsRulesPage
