import React from 'react'
import './FloorFour.scss'
import { Link } from 'react-router-dom';

function FloorFour() {
  return (
    <div> 
      <Link to="/floor-four/flat-one" className='nav-link nav-link-ltr'>Flat One</Link>

    </div>
  )
}

export default FloorFour