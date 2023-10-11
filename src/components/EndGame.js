import  ButtonPage   from './Button/index.js'

import './EndGame.css'
const EndGame = ({initGame}) => {
  return (
    <div>
      <h1>Game-Over</h1>
    <ButtonPage onClick={initGame} name={'Jogar Novamente!!'}/>
    </div>
  )
}

export default EndGame