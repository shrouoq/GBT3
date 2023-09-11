import React from 'react'
import './featuries.css'
import Features from '../../components/features/feat'

export default function Featuries() {

    let data = [
        {
            title:"Improving end distrusts instantly",
            pra:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        },
        {
            title:'Become the tended active',
            pra :"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        },
        {
            title:'Message or am nothing',
            pra:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
        },
        {
            title:'Really boy law county',
            pra:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..'
        }
    ]

  return (
    <div className='featuries'>
      
        <div className='feats-heading'>
            <h1 className='gradient-text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
            <p>Request Early Access to Get Started</p>
        </div>

        <div className='feats-container'>
            {
                data.map(ele => 
                    <Features title={ele.title} pra={ele.pra}/>
                )
            }
        </div>

    </div>
  )
}
