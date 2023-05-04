import React from 'react'
import './css/why.section.css'
import Card from '../card'
import { SlLock } from 'react-icons/sl'
import { AiOutlineStop } from 'react-icons/ai'
import { TbCameraSelfie } from 'react-icons/tb'


export default function WhySection() {
  return (
    <div>
      <div className="why-container">
        <h1 className="why-title">Why should you use this platform?</h1>
        <hr className='why-line'></hr>
        <div className="container">
            <Card icon={<SlLock />} color="#000" title="Protect your privacy!" />
            <Card icon={<AiOutlineStop />} color="red" title="Stop bullying and manipulation!" />
            <Card icon={<TbCameraSelfie />} color="green" title="Feel free to share yourself!" />
        </div>
      </div>
    </div>
  )
}
