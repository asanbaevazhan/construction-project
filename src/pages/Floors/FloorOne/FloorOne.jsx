import React from 'react'
import './FloorOne.scss'
import { useNavigate } from "react-router-dom";
import building from './../../../assets/img/Новая планировка этажа.png'
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import FlatLayout from '../../../components/FlatLayout/FlatLayout';


function FloorOne() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-two');
  }

  const handleCancel = () => {
    navigate("/");
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
              <p>1</p>
              <span>ЭТАЖ</span>
            </div>

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
      
      <FlatLayout/>
      
    </div>
  )
}

export default FloorOne