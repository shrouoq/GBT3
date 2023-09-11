import React from 'react'
import './blog.css'

export default function Blog({pic, date , title , read}) {
  return (
    <div className='blog-container'>
      <div className='pic'>
            <img src={pic} alt='blog-pic' />
      </div>

      <div className='data'>
            <div className='box'>
                <p>{date}</p>
                <h1>{title}</h1>
            </div>

            <div className='box'>
                <p>{read}</p>
            </div>
      </div>
    </div>
  )
}
