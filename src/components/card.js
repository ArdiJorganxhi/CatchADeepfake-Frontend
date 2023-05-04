import React from 'react'
import './css/card.css'
export default function Card(props) {
  return (
    <div>
    <div className="card-container">
    <div className="card-icon" style={{ color: props.color }}>
      {props.icon}
      </div>
      <div className="card-title">
        <h3>{props.title}</h3>
      </div>
      </div>
    </div>
  )
}
