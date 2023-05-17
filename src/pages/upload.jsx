import React, { useRef } from 'react'
import Navbar from '../components/navbar'
import './css/upload.css'
import Button from '../components/button'
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import RequestService from '../services/request.service';
import { useDispatch } from 'react-redux';
import { fake, real } from '../redux/slices/isRealSlice';

export default function Upload() {

  const dispatch = useDispatch()

  const ref = useRef();
  const navigate = useNavigate()
  const handleClick = () => {
      ref.current.click();
    
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    
    RequestService.post("/predict-video").then(
      res => {
        if(res.data == "REAL") {
          dispatch(real())
          navigate('/result')
        } else {
          dispatch(fake())
          navigate('/result')
        }
      }
    )
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     RequestService.post("/predict-audio").then(
      res => {
        if(res.data == "REAL") {
          dispatch(real())
        } else {
          dispatch(fake())
        }
      }
    )
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
