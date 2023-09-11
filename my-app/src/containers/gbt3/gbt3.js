import React from 'react'
import './gbt.css'
import Features from '../../components/features/feat'

export default function Gbt3() {
  return (
    <div className='gbt-container'>

        <div className='gbt-part1'>
            <Features title='What is GPT-3' pra = 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
        </div>

        <div className='gbt-part2'>
            <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
            <a href='#'>Explore the Library</a>
        </div>

        <div className='gbt-part3'>
            <Features title='Chatbots' pra='We so opinion friends me message as delight. Whole front do of plate heard oh ought.' />
            <Features title='Knowledgebase' pra='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
            <Features title='Education' pra='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        </div>

    </div>
  )
}
