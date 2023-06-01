import React from 'react'
import { motion } from 'framer-motion'
import { MdOutlineDone } from 'react-icons/md'
import Button from '../button'
import { Link } from 'react-router-dom'


export default function RealResult() {
  return (
    <div>
      <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <div className="result-container">
      <div className="circle green">
        <div className="done-icon">
        <MdOutlineDone />
        </div>
        <div className="result-desc">
          <h3>Your uploaded content is real!</h3>
        </div>
        <div className="buttons-container">
        <Button title="Return Home" navigate="/" />
        <Button title="Upload another content" navigate="/upload" />
        </div>
      </div>
      </div>
    </motion.div>
    </div>
  )
}
