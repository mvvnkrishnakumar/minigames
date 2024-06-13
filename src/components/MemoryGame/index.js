import {useState, useEffect} from 'react'
import {IoMdClose} from 'react-icons/io'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BiArrowBack} from 'react-icons/bi'
import './index.css'
import {
  MemoryCardGrid,
  MemoryCenter,
  MemoryBackground,
  MemoryHeading,
  Button,
  MemoryButtonAlign,
  MemoryCardBackgroundColor,
  MemoryHeaderAlign,
  MemoryHeader,
  MemoryRulesButton,
} from './styledComponents'
import MemorySingleCard from '../MemorySingleCard'
const cardsData = [
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
    matched: false,
  },
  {
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
    matched: false,
  },
]
const MemoryGame = () => {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [score, setScore] = useState(0)
  const shuffleCards = () => {
    const shuffledCards = [...cardsData, ...cardsData]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
  const handleChoice = card => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.image === choiceTwo.image) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.image === choiceOne.image) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
        scoreValue()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])
  console.log(cards)
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  useEffect(() => {
    shuffleCards()
  }, [])
  const scoreValue = () => {
    if (choiceOne.image === choiceTwo.image) {
      setScore(prevScore => prevScore + 1)
    }
  }
  return (
    <div>
      <MemoryBackground>
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
            <Popup modal trigger={<MemoryRulesButton>Rules</MemoryRulesButton>}>
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
                      When the game is started, the users should be able to see
                      the list of Cards that are shuffled and turned face down.
                    </li>
                    <li className="memory-para-popup">
                      If the two cards have the same image, they remain face up.
                      If not, they should be flipped face down again after a
                      sgort 1 second.
                    </li>
                    <li className="memory-para-popup">
                      Users should be able to compare only two cards at a time.
                    </li>
                  </ul>
                </>
              )}
            </Popup>
          </div>
        </div>
        <MemoryButtonAlign>
          <Button onClick={shuffleCards}>Restart</Button>
        </MemoryButtonAlign>
        <MemoryHeading>Card-Flip Memory Game</MemoryHeading>
        <MemoryHeaderAlign>
          <MemoryHeader>Card flip count- {turns}</MemoryHeader>
          <MemoryHeader>Score- {score}</MemoryHeader>
        </MemoryHeaderAlign>
        <MemoryCenter>
          <MemoryCardBackgroundColor>
            <MemoryCardGrid>
              {cards.map(card => (
                <MemorySingleCard
                  key={card.id}
                  card={card}
                  handleChoice={handleChoice}
                  flipped={
                    card === choiceOne || card === choiceTwo || card.matched
                  }
                />
              ))}
            </MemoryCardGrid>
          </MemoryCardBackgroundColor>
        </MemoryCenter>
      </MemoryBackground>
    </div>
  )
}
export default MemoryGame
