import React from 'react';
import './blogs.css';
import Blog from '../../components/blog/blog';
import Rectangle from '../../assets/Rectangle.png'
import rec from '../../assets/rec.png'
import Rectangle3 from '../../assets/Rectangle3.png'
import Rectangle4 from '../../assets/Rectangle4.png'

export default function Blogs() { 
    let data = [
        {
            img:Rectangle,
            datee:'Sep 26, 2021',
            title:'GPT-3 and Open AI is the future. Let us exlore how it is?',
            read:'Read Full Article'
        },
        {
            img:rec,
            datee:'Sep 26, 2021',
            title:'GPT-3 and Open AI is the future. Let us exlore how it is?',
            read:'Read Full Article' 
        },
        {
            img:Rectangle3,
            datee:'Sep 26, 2021',
            title:'GPT-3 and Open AI is the future. Let us exlore how it is?',
            read:'Read Full Article' 
        },
        {
            img:Rectangle4,
            datee:'Sep 26, 2021',
            title:'GPT-3 and Open AI is the future. Let us exlore how it is?',
            read:'Read Full Article' 
        },
    ]
    
  return (
    <div className='blogs-container'>

        <div className='blogs-box one'>
            <Blog pic={Rectangle} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?' read='read full article' />
        </div>

        <div className='blogs-box two'>
            {
                data.map(ele => <Blog pic={ele.img} date={ele.datee} title={ele.title} read={ele.read} />)
            }
        </div>

    </div>
  )
}
