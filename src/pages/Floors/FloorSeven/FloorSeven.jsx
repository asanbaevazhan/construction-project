import React from 'react'
import './FloorSeven.scss'
import { Link } from 'react-router-dom';

function FloorSeven() {
  return (
    <div>
      <Link to="/floor-seven/flat-one" className='nav-link nav-link-ltr'>Flat One</Link>
    </div>
  )
}

export default FloorSeven