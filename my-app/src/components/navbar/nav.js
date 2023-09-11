import React from 'react';
import './nav.css';
import {FaAlignRight , FaTimes} from 'react-icons/fa';
import { useState } from 'react';

export default function Nav() {

const [toggle,setToggle] = useState(false);

const handelToggle = () => {
  setToggle(!toggle)
}

  return (
    <div className='navBar-container'>

      <div className='links-container'>

        <div className='navBar-logo'>
          <h1>gpt-3</h1>
        </div>

        <div className='navBar-links'>
          <p><a href='#home'>home</a></p>
          <p><a href='#what'>whatgbt-3</a></p>
          <p><a href='#openAi'>open Ai</a></p>
          <p><a href='#case'>case Studies</a></p>
          <p><a href='#library'>library</a></p>
        </div>

      </div>

      <div className='navBar-btns'>
        <button type='button'>sign in</button>
        <button className='red-btn' type='button'>sign up</button>
        <div className='bars' onClick={handelToggle}>

        {
          toggle? <FaTimes color='#fff' size={25}/> :<FaAlignRight color='#fff' size={25} />
        }

        </div>
      </div>

      {
        toggle ?
      <div className='navBar-list scale-up-center'>
        <p><a href='#home'>home</a></p>
        <p><a href='#what'>whatgbt-3</a></p>
        <p><a href='#openAi'>open Ai</a></p>
        <p><a href='#case'>case Studies</a></p>
        <p><a href='#library'>library</a></p>
        <div className='list-btns'>
            <button>sign in</button>
            <button className='red-btn'>sign up</button>
        </div>
      </div>:''
      }


    </div>
  )
}
