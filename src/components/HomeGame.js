import { useState } from 'react'
import  ButtonPage   from './Button/index.js'
import {wordList} from '../data/PalavrasSecret'
import './HomeGame.css'


const HomeGame = ({startGame}) => {



  return (
    <div className='homeGame' >
      <h1>Secret Word</h1>
      <h3>Aperte no botão para começar</h3>
      <ButtonPage onClick={startGame} name={"COMEÇAR O JOGO!!"}/>
    </div>
  )
}

export default HomeGame