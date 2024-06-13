import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import EmojiGame from './components/EmojiGame'
import EmojiRulesPage from './components/EmojiRulesPage'
import RockPaperScissors from './components/RockPaperScissors'
import RpsRulesPage from './components/RpsRulesPage'
import MemoryGame from './components/MemoryGame'
import MemoryCardRules from './components/MemoryCardRules'
import MemoryMatrix from './components/MemoryMatrix'
import MemoryGridRules from './components/MemoryGridRules'

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/emoji-start" element={<EmojiRulesPage/>} />
      <Route exact path="/emoji" element={<EmojiGame/>} />
      <Route exact path="/rps-start" element={<RpsRulesPage/>} />
      <Route exact path="/rock-paper-scissors" element={<RockPaperScissors/>} />
      <Route exact path="/memory-start" element={<MemoryCardRules/>} />
      <Route exact path="/memory" element={<MemoryGame/>} />
      <Route exact path="/matrix" element={<MemoryMatrix/>} />
      <Route exact path="/grid-start" element={<MemoryGridRules/>} />
    </Routes>
  </>
)

export default App
