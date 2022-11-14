import React from 'react'
import './FlatThirteen4.scss'
import { useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import flatThirteen from './../../../../assets/flat/квартира 13.jpg'

function FlatThirteen4() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-five');
  }
  const handleBack = () => {
    navigate('/floor-three');
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <div className='flat-one'>
      <div className="floor-one-page-wrapper">
        <div className='side' >
          <div className="pagination">
            <UpOutlined 
              style={{ fontSize: '100px', color: '#756b60'}}
              onClick={handleNext}
            />
            <div className='first-floor'>
              <p>4</p>
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

        <div className="flat-one-info">
          <img src={flatThirteen} alt="" />

         <div className="flat-text-info">
          <p className='rooms'>КОЛИЧЕСТВО КОМНАТ</p>
          <p className='q-rooms'>3</p>
          <p className='square'>ПЛОЩАДЬ, М²</p>
          <p className='square-info'>118,16</p>
         </div>
        </div>

        <div className="cancel" >
            <CloseOutlined 
            onClick={handleCancel}
              style={{ fontSize: '40px', color: '#756b60'}}
            />
        </div>

      </div>
      
    </div>
  )
}

export default FlatThirteen4