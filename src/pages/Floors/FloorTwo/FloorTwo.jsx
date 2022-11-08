import React from 'react'
import './FloorTwo.scss'
import { Link } from 'react-router-dom';

function FloorTwo() {
  return (
    <div>
        <Link to="/floor-two/flat-one" className='nav-link nav-link-ltr'>Flat One</Link>
    </div>
  )
}

export default FloorTwo