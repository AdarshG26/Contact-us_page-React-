import React from 'react'
import './Button.css'


const Button = (props) => {
  return (
    <button onClick={props.click}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default Button