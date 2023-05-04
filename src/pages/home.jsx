import React from 'react'
import HeroSection from '../components/home/hero.section';
import Navbar from '../components/navbar';
import About from '../components/home/about';
import WhySection from '../components/home/why.section';
import GetStarted from '../components/home/get.started';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <WhySection />
      <GetStarted />
    </div>
  )
}
