import {MemoryCenter} from './styledComponents'
import './index.css'
const MemorySingleCard = props => {
  const {card, handleChoice, flipped} = props
  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <div key={card.id} className="card">
      <MemoryCenter>
        <div className={flipped ? 'flipped' : ''}>
          <img src={card.image} className="front" />
          <div className="back-card" onClick={handleClick}>
            <div className="cover-align">
              <img
                src="https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/ybjanpwbrvvzxnoq9nnf"
                className="memory-image"
              />
            </div>
          </div>
        </div>
      </MemoryCenter>
    </div>
  )
}
export default MemorySingleCard
