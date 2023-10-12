import  ButtonPage   from './Button/index.js'

import './EndGame.css'
const EndGame = ({initGame, score}) => {
  return (
    <div className='endGame'>
      <h1>Fim de jogo</h1>
      <h2>Sua pontuação foi: <span>{score}</span></h2>
    <ButtonPage onClick={initGame} name={'Jogar Novamente!!'}/>
    </div>
  )
}

export default EndGame