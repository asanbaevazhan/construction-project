import React from 'react'
import './FloorEight.scss'
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import FlatLayout8 from '../../../components/FlatLayout8/FlatLayout8';

function FloorEight() {
  const navigate = useNavigate();


  const handleBack = () => {
    navigate('/floor-seven');
  }

  const handleCancel = () => {
    navigate('/');
  }
  return (
    <div className='floor-one-page'>
    <div className="floor-one-page-wrapper">

      <div className='side-eight' >
        <div className="pagination">

          <div className='first-floor'>
            <p>8</p>
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
    
    <FlatLayout8/>
    
  </div>
  )
}

export default FloorEight