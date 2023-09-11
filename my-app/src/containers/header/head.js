import React from 'react';
import './head.css';
import people from '../../assets/people.png';
import Headerr from '../../assets/Headerr.png'

export default function Header() {
  return (
    <div className='header-container'>

      <div className='data-container box'>
          <div className='data'>
              <div className='header-data'>
                  <h1 className='gradient-text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
                  <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
              </div>

              <div className='header-form'>
                <input type='email' placeholder='your email address' />
                <button className='red-btn' type='button'>get started</button>
              </div>

              <div className='header-pics'>
                <div className='header-box'>
                  <img src={people} alt='people' />
                </div>

                <div className='header-box'> 
                  <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
              </div>
          </div>
      </div>

      <div className='header-photo box'>
          <img src={Headerr} alt='headPhoto' />
      </div>

    </div>
  )
}
