import React from 'react'
import './feat.css'

export default function Features({title , pra}) {
  return (
    <div className='features-container'>

        <div className='features-title'>
            <h3>{title}</h3>
        </div>

        <div className='features-prag'>
            <p>{pra}</p>
        </div>
    </div>
  )
}
