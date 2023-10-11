import React, { Children } from 'react'
import './styles.css'
const ButtonPage = ({onClick,name}) => {
  return (
    <div>
        <button onClick={onClick} >{name}</button>
    </div>
  )
}

export default ButtonPage