import React from 'react'
import './FloorSix.scss'
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import FlatLayout6 from '../../../components/FlatLayout6/FlatLayout6';

function FloorSix() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-seven');
  }

  const handleBack = () => {
    navigate('/floor-five');
  }

  const handleCancel = () => {
    navigate('/');
  }
  return (
    <div className='floor-one-page'>
    <div className="floor-one-page-wrapper">

      <div className='side' >
        <div className="pagination">

          <UpOutlined 
            style={{ fontSize: '100px', color: '#756b60'}}
            onClick={handleNext}
          />

          <div className='first-floor'>
            <p>6</p>
            <span>ЭТАЖ</span>
          </div>

          <DownOutlined 
            style={{ fontSize: '100px', color: '#756b60'}}
            onClick={handleBack}
          />

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
    
    <FlatLayout6/>
    
  </div>
  )
}

export default FloorSix