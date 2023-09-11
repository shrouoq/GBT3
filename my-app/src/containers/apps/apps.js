import React from 'react'
import './apps.css'
import image from '../../assets/Image.png'

export default function Apps() {
  return (
    <div className='apps-container'>

      <div className='apps-image box'>
        <img src={image} alt='pic' />
      </div>

      <div className='apps-data box'>

        <div className='data'>
            <p>Request Early Access to Get Started</p>

            <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>

            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

            <p>Request Early Access to Get Started</p>
        </div>

      </div>

    </div>
  )
}
