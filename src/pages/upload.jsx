import React, { useRef } from 'react'
import Navbar from '../components/navbar'
import './css/upload.css'
import Button from '../components/button'
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

export default function Upload() {

  const ref = useRef();
  const navigate = useNavigate()
  const handleClick = () => {
      ref.current.click();
      navigate('/result')
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    navigate('/result')
    // Do something with the selected file
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/result')
    
  }
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.5 }}
  >
      <Navbar />
      <div className="upload-container">
      <div className="upload-title">
        <h3>Upload your video or audio file.</h3>
      </div>
      <div className="buttons-container">
        <Button title="Upload video" onClick={handleClick} onSubmit={handleSubmit} />
        <Button title="Upload audio" onClick={handleClick} />
      </div>
      </div>
      <form onSubmit={handleSubmit}>
      <input
        ref={ref}
        type="file"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
      />
      </form>
      
    </motion.div>
  )
}
