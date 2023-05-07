import React from 'react'
import HeroBanner from './images/hero-banner.jpeg'
import './css/hero.section.css'
import Button from '../button'


export default function HeroSection() {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-section-box">
          <div className="hero-section-box-left">
            <h1>We're here to avoid manipulation!</h1>
            <p>Upload your video or audio file to see if there is any manipulation.</p>
            <div className="hero-button-container">
            <Button title="Get Started!" navigate="/upload" />
            </div>

        
         
          </div>
          <div className="hero-section-box-right">
            <img src={HeroBanner} alt="" width='650' height='500'/>
          </div>
        </div>
      </div>
    </div>
        
  )
}
