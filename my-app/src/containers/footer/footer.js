import React from 'react'
import './footer.css'
import Title from '../../components/footerTitle/title'
import Links from '../../components/footerLinks/Links'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='container'>
        <Title />
        <Links />
      </div>
    </div>
  )
}
