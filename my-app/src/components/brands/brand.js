import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'


export default function Brand() {
  return (
    <div className='brands-container'>
      
        <div className='pic'>
            <img src={google} alt='pic' />
        </div>

        <div className='pic'>
            <img src={dropbox} alt='pic' />
        </div>

        <div className='pic'>
            <img src={atlassian} alt='pic' />
        </div>

        <div className='pic'>
            <img src={shopify} alt='pic' />
        </div>

        <div className='pic'>
            <img src={slack} alt='pic' />
        </div>

    </div>
  )
}
