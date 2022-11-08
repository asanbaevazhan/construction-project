import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
  return (
    <div className='home'> 
        <div className="floors">
            <Link to="/floor-nine" className='floor-nine'></Link>
            <Link to="/floor-eight" className='floor-eight'></Link>
            <Link to="/floor-seven" className='floor-seven'></Link>
            <Link to="/floor-six" className='floor-six'></Link>
            <Link to="/floor-five" className='floor-five'></Link>
            <Link to="/floor-four" className='floor-four'></Link>
            <Link to="/floor-three" className='floor-three'></Link>
            <Link to="/floor-two" className='floor-two'></Link>
            <Link to="/floor-one" className='floor-one'></Link>
        </div>
        
    </div>
  )
}

export default Home