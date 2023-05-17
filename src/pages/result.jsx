import React from 'react'
import {MdOutlineDone} from 'react-icons/md'
import Navbar from '../components/navbar'
import './css/result.css'
import Button from '../components/button'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RealResult from '../components/result/real.result'
import FakeResult from '../components/result/fake.result'

export default function Result() {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/')
  } 

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <Navbar />
      <FakeResult />
    </motion.div>
  )
}
