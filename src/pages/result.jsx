import React from 'react'
import {MdOutlineDone} from 'react-icons/md'
import Navbar from '../components/navbar'
import './css/result.css'
import Button from '../components/button'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function Result() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/')
  } 

  return (
    <div>
      <Navbar />
      <div className="result-container">
      <div className="circle">
        <div className="done-icon">
        <MdOutlineDone />
        </div>
        <div className="result-desc">
          <h3>Your uploaded video is real!</h3>
        </div>
        <div className="buttons-container">
        <Button title="Return Home" onClick={navigateHome} />
        <Link to='/upload'>
        <Button title="Upload another content" />
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}
