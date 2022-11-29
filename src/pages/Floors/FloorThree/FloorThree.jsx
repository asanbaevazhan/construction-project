import React from 'react'
import './FloorThree.scss'
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import FlatLayout3 from '../../../components/FlatLayout3/FlatLayout3';

function FloorThree() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-four');
  }

  const handleBack = () => {
    navigate('/floor-two');
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
            className="up-icon"
          />

          <div className='first-floor'>
            <p>3</p>
            <span>ЭТАЖ</span>
          </div>

          <DownOutlined 
            style={{ fontSize: '100px', color: '#756b60'}}
            onClick={handleBack}
            className="up-icon"

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
    
    <FlatLayout3/>
    
  </div>
  )
}

export default FloorThree