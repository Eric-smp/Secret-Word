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

  const [pickedWord, setPickedWord]= useState('')
  const [pickedCategory, setPickedCatedory]= useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetter, setGuessedLetter]=useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore ] = useState(0)





  const pickeWordAndCategory = useCallback(()=>{
    //pick category
    const categorias = Object.keys(words)
    const categoriasRandom = categorias[Math.floor(Math.random() * Object.keys(categorias).length)]
    //pick word
    const word = words[categoriasRandom][Math.floor(Math.random() * words[categoriasRandom].length)]
     
    return {categoriasRandom, word}


  }, [words])

  const startGame=  useCallback(()=>{
    clearLetterStates()
    const {categoriasRandom, word} = pickeWordAndCategory()

    const wordLetters = word.split("")



    //set fill
    setPickedWord(word)
    setPickedCatedory(categoriasRandom)
    setLetters(wordLetters)

    setGameStagem(stages[1].name)
  }, [pickeWordAndCategory])
  const verifyLetter= (letter)=>{
    const normalizedLetter = letter.toLowerCase()

    if(guessedLetter.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }


    if(letters.includes(normalizedLetter)){
      setGuessedLetter((actualGuessedsLetters)=>[
        ...actualGuessedsLetters,
        normalizedLetter
      ])
    }else{
      setWrongLetters((actualWrongLetters)=>[
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGuesses((actualGuesse)=> actualGuesse - 1 )
    }


  }
  function clearLetterStates(){
    setGuessedLetter([])
    setWrongLetters([])
  }

  useEffect(()=>{
    if(guesses <=0){
      clearLetterStates()
      setGameStagem(stages[2].name)
    }
    
  }, [guesses])


  useEffect(()=>{
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetter.length === uniqueLetters.length){
      startGame() 
      setScore((actualScore)=> actualScore + 100 )
      
    }


      
  }, [guessedLetter, letters, startGame])




  const initGame = ()=>{
    setScore(0)
    setGuesses(3)
    setGameStagem(stages[0].name)
  }
  return (
    <div className="App">
      {gameStagem === 'start' && <HomeGame startGame={startGame}/>}
      {gameStagem === 'game' && <StartGame verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guesses={guesses} guessedLetter={guessedLetter} wordLetters={wrongLetters} score={score }/>}
      {gameStagem === 'end' && <EndGame initGame={initGame} score={score}/>}
    </div>
  );
}

export default App;
