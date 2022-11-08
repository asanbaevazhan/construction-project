import React from 'react'
import './FloorOne.scss'
import { Link } from 'react-router-dom';

function FloorOne() {
  return (
    <div className='floor-one'>
        <Link to="/floor-one/flat-one" className='nav-link nav-link-ltr'>Flat One</Link>
        <Link to="/floor-one/flat-two" className='nav-link nav-link-ltr'>Flat Two</Link>
    </div>
  )
}

export default FloorOne