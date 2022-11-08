import React from 'react'
import './FloorNine.scss'
import { Link } from 'react-router-dom';

function FloorNine() {
  return (
    <div>
      <Link to="/floor-nine/flat-one" className='nav-link nav-link-ltr'>Flat One</Link>
    </div>
  )
}

export default FloorNine