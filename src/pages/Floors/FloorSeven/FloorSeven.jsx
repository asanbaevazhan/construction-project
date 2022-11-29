import React from 'react'
import './FloorSeven.scss'
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import FlatLayout7 from '../../../components/FlatLayout7/FlatLayout7';

function FloorSeven() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-eight');
  }

  const handleBack = () => {
    navigate('/floor-six');
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
            className="up-icon"
            onClick={handleNext}
          />

          <div className='first-floor'>
            <p>7</p>
            <span>ЭТАЖ</span>
          </div>

          <DownOutlined 
            style={{ fontSize: '100px', color: '#756b60'}}
            className="up-icon"
            onClick={handleBack}
          />

        </div>

        <div className="residential-complex">
          <p>ЖК "АТМОСФЕРА"</p>
        </div>

      </div>

      <img src={building} alt="" />

      <div className="cancel" onClick={handleCancel}>
        <CloseOutlined 
          style={{ fontSize: '40px', color: '#756b60'}}
        />
      </div>
    </div>
    
    <FlatLayout7/>
    
  </div>
  )
}

export default FloorSeven