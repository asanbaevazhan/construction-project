import React from 'react'
import './FloorFive.scss'
import { Link } from 'react-router-dom';

function FloorFive() {
  return (
    <div>
       <Link to="/floor-five/flat-one" className='nav-link nav-link-ltr'>Flat One</Link>
    </div>
  )
}

export default FloorFive