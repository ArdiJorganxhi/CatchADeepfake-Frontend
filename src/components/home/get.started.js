import React from 'react'
import './css/get.started.css'
import Button from '../button'

export default function GetStarted() {
  return (
    <div>
      <div className="get-started-container">
        <div className="get-started-title">
            <h3>Ready to catch some DeepFakes?</h3>
            <hr className='get-started-line'></hr>
        </div>
        <div className="button-container">
            <Button title="Get Started!" navigate="/upload" />
        </div>
      </div>
    </div>
  )
}
