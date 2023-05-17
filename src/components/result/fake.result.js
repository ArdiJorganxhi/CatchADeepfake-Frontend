import React from 'react'
import { BsExclamationLg } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Button from '../button'

export default function FakeResult() {
  return (
    <div>
      <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <div className="result-container">
      <div className="circle red">
        <div className="wrong-icon">
        <BsExclamationLg />
        </div>
        <div className="result-desc">
          <h3>Your uploaded video is fake!</h3>
        </div>
        <div className="buttons-container">
        <Button title="Return Home" />
        <Button title="Upload another content" />
        </div>
      </div>
      </div>
    </motion.div>
    </div>
  )
  
}
