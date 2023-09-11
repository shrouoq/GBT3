import React from 'react'
import './links.css'

export default function Links() {
  return (
    <div className='link-container'>

        <div className='box'>

            <div className='tit-container'>
                <h1>gpt-3</h1>
                <p>Crechterwoord K12 182 DK<br/>Alknjkcb, All Rights Reserved</p>
            </div>

            <div className='data'>
                <h3>Get in touch</h3>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </div>
            
        </div>

        <div className='box'>
            <div className='tit-container'>
                <h3>Links</h3>
            </div>

            <div className='links'>
                <a href='#' value=''>Overons</a>
                <a href='#' value=''>Social Media</a>
                <a href='#' value=''>Counters</a>
                <a href='#' value=''>Contact</a>

            </div>
        </div>

        <div className='box'>
            <div className='tit-container'>
                <h3>Company</h3>
            </div>

            <div className='links'>
                <a value='' href='#'>Terms & Conditions</a>
                <a value='' href='#'>Privacy Policy</a>
                <a value='' href='#'>Contact</a>
            </div>
        </div>

    </div>
  )
}
