import React from 'react'
import './FloorFive.scss'
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import FlatLayout5 from '../../../components/FlatLayout5/FlatLayout5';

function FloorFive() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-six');
  }

  const handleBack = () => {
    navigate('/floor-four');
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
            <p>5</p>
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
    
    <FlatLayout5/>
    
  </div>
  )
}

export default FloorFive