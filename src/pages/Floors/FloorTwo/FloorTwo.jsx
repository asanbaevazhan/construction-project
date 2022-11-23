import React from 'react'
import './FloorTwo.scss'
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import FlatLayout2 from '../../../components/FlatLayout2/FlatLayout2';

function FloorTwo() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-three');
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
            <p>2</p>
            <span>ЭТАЖ</span>
          </div>

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
    
    {/* <FlatLayout2/> */}
    
  </div>
  )
}

export default FloorTwo