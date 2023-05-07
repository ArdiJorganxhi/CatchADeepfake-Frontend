import React from 'react'
import './css/button.css'
import { Link } from 'react-router-dom'

export default function Button(props) {
  return (
    <Link to={props.navigate}>
   <button className='button-component' onClick={props.onClick} onSubmit={props.onSubmit}>
    <h3>{props.title}</h3>
   </button>
   </Link>
  )
}
