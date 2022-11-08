import React from 'react'
import './FloorThree.scss'
import { Link } from 'react-router-dom';

function FloorThree() {
  return (
    <div>
        <Link to="/floor-three/flat-one" className='nav-link nav-link-ltr'>Flat One</Link>

    </div>
  )
}

export default FloorThree