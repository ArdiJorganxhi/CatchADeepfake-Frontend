import React from 'react'
import HeroSection from '../components/home/hero.section';
import Navbar from '../components/navbar';
import About from '../components/home/about';
import WhySection from '../components/home/why.section';
import GetStarted from '../components/home/get.started';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
      <Navbar />
      <HeroSection />
      <About />
      <WhySection />
      <GetStarted />
    </motion.div>
  )
}
