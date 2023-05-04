import React from 'react'
import Navbar from '../components/navbar'
import './css/upload.css'
import Button from '../components/button'

export default function Upload() {
  return (
    <div>
      <Navbar />
      <div className="upload-container">
      <div className="upload-title">
        <h3>Upload your video or audio file.</h3>
      </div>
      <div className="buttons-container">
        <Button title="Upload video" />
        <Button title="Upload audio" />
      </div>
      </div>
      
    </div>
  )
}
