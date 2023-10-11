import ButtonPage from "./Button"
import "./StartGame.css"


const StartGame = ({endGame}) => {
  return (
    <div>
      <h1>Bora começar</h1>
      <ButtonPage onClick={endGame} name={"Clique aqui!!"}/>
    </div>
  )
}

export default StartGame