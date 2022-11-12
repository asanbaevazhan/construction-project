import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss'

function Home() {
  return (
    <div className='home'> 
        <div className="floors">

            {/* <Link to="/floor-nine" className='floor-nine'>
                <p> <span>9</span> ЭТАЖ </p>
            </Link> */}

            <Link to="/floor-eight" className='floor-eight'>
                <p> <span>8</span> ЭТАЖ </p>
            </Link>

            <Link to="/floor-seven" className='floor-seven'>
                <p> <span>7</span> ЭТАЖ </p>
            </Link>

            <Link to="/floor-six" className='floor-six'>
                <p> <span>6</span> ЭТАЖ </p>
            </Link>

            <Link to="/floor-five" className='floor-five'>
                <p> <span>5</span> ЭТАЖ </p>
            </Link>

            <Link to="/floor-four" className='floor-four'>
                <p> <span>4</span> ЭТАЖ </p>
            </Link>
            <Link to="/floor-three" className='floor-three'>
                <p> <span>3</span> ЭТАЖ </p>
            </Link>
            <Link to="/floor-two" className='floor-two'>
                <p> <span>2</span> ЭТАЖ </p>
            </Link>

            {/* <Link to="/floor-one" className='floor-one'>
                <p> <span>1</span> ЭТАЖ </p>
            </Link> */}
            
        </div>

        <div className='headline'>
            <h1>Выберите этаж</h1>
            <p>чтобы просмотреть планировку этажа</p>
        </div>
        
        
    </div>
  )
}

export default Home