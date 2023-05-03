import React from 'react'
import HeroSection from '../components/home/hero.section';
import Navbar from '../components/navbar';
import About from '../components/home/about';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  )
}
