import { useState, useRef } from "react"
import ButtonPage from "./Button"
import "./StartGame.css"


const StartGame = ({verifyLetter, pickedWord, pickedCategory, letters, guesses, wordLetters, score, guessedLetter }) => {

  const[letter, setLetter] = useState("")
  const letterInputRef = useRef(null)

  const handleSubmit = (e)=>{
     e.preventDefault()
     verifyLetter(letter)

     setLetter("")

     letterInputRef.current.focus()
  }
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação:{score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavra <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
       {letters.map((letters, i)=> (
        guessedLetter.includes(letters) ? (
          <span key={i} className="letter">{letters}</span>
        ): (
          <span key={i} className="blankSquare"></span>
        )
       ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e)=> setLetter(e.target.value)}  value={letter} ref={letterInputRef}/>
          <ButtonPage name="jogar!"></ButtonPage>
        </form>
      </div>

      <div className="letterUtilizada">
        <p>Letra já utilizadas: {wordLetters.map((letters, i)=> (
        <span key={i}>{letters},</span>
       ))}</p>
       
      </div>
      {/* <ButtonPage onClick={verifyLetter} name={"Clique aqui!!"}/> */}
    </div>
  )
}

export default StartGame