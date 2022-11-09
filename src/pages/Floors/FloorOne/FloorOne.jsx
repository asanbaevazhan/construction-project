import React from 'react'
import './FloorOne.scss'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import flatOne from './../../../assets/img/flat-one.svg'
import flatTwo from './../../../assets/img/flat-two.svg'
import flatThree from './../../../assets/img/flat-three.svg'
import flatFour from './../../../assets/img/flat-four.svg'
import flatFive from './../../../assets/img/flat-five.svg'
import flatSix from './../../../assets/img/flat-six.svg'


function FloorOne() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-two');
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <div className='floor-one-page'>
      <div className="floor-one-page-wrapper">
        <div className='side' >
          <div className="pagination">
            <UpOutlined 
              style={{ fontSize: '100px'}}
              onClick={handleNext}
            />
            <p>1</p>

          </div>

          <div className="residential-complex">
            <p>ЖК "CONSTRUCTION"</p>
          </div>

        </div>

        <img src={building} alt="" />

        <div className="cancel" onClick={handleCancel}>
          <CloseOutlined 
            style={{ fontSize: '40px', color: '#756b60'}}
          />
        </div>
      </div>
      

      <div className="flat-links">
        <Link to="/flat-one" className='floor-one-flat-one'>
          <img src={flatOne} alt="" />
        </Link>

        <Link to="/flat-two" className='floor-one-flat-two'>
          <img src={flatTwo} alt="" />
        </Link>

        <Link to="/flat-three" className='floor-one-flat-three'>
          <img src={flatThree} alt="" />
        </Link>

        <Link to="/flat-four" className='floor-one-flat-four'>
          <img src={flatFour} alt="" />
        </Link>

        <Link to="/flat-five" className='floor-one-flat-five'>
          <img src={flatFive} alt="" />
        </Link>

        <Link to="/flat-six" className='floor-one-flat-six'>
          <img src={flatSix} alt="" />
        </Link>

        <Link to="/flat-seven" className='floor-one-flat-seven'>
          7
        </Link>

        <Link to="/flat-eight" className='floor-one-flat-eight'>
          8
        </Link>

        <Link to="/flat-nine" className='floor-one-flat-nine'>
          9
        </Link>

        <Link to="/flat-ten" className='floor-one-flat-ten'>
          10
        </Link>

        <Link to="/flat-eleven" className='floor-one-flat-eleven'>
          11
        </Link>

        <Link to="/flat-twelve" className='floor-one-flat-twelve'>
          12
        </Link>
      </div>
    </div>
  )
}

export default FloorOne