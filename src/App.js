//CSS
import './App.css';

//REACT
import { useCallback, useState, useEffect } from 'react';

//components
import HomeGame from './components/HomeGame';
import StartGame  from './components/StartGame'
import EndGame from './components/EndGame'

//DATA
import {wordList} from './data/PalavrasSecret'

  const stages= [{id:1, name:'start'},{id:2, name:'game'}, {id:3, name:'end'}]

function App() {
  const [gameStagem, setGameStagem]= useState(stages[0].name)
  const [words] = useState(wordList)

  const startGame= ()=>{
    setGameStagem(stages[1].name)
  }
  const endGame= ()=>{
    setGameStagem(stages[2].name)
  }
  const initGame = ()=>{
    setGameStagem([0].name)
  }
  return (
    <div className="App">
      {gameStagem === 'start' && <HomeGame startGame={startGame}/>}
      {gameStagem === 'game' && <StartGame endGame={endGame}/>}
      {gameStagem === 'end' && <EndGame initGame={initGame}/>}
    </div>
  );
}

export default App;
