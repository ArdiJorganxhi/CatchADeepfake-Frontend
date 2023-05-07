import React, { useRef } from 'react'
import Navbar from '../components/navbar'
import './css/upload.css'
import Button from '../components/button'

export default function Upload() {

  const ref = useRef();

  const handleClick = () => {
      ref.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
  };
  return (
    <div>
      <Navbar />
      <div className="upload-container">
      <div className="upload-title">
        <h3>Upload your video or audio file.</h3>
      </div>
      <div className="buttons-container">
        <Button title="Upload video" onClick={handleClick} />
        <Button title="Upload audio" onClick={handleClick} />
      </div>
      </div>
      <input
        ref={ref}
        type="file"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
      />
      
    </div>
  )
}
