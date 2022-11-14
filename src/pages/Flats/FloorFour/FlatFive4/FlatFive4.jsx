import React from 'react'
import './FlatFive4.scss'
import { useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import flatFive from './../../../../assets/flat/квартира 5.jpg'

function FlatFive4() {
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
          <img src={flatFive} alt="" />

         <div className="flat-text-info">
          <p className='rooms'>КОЛИЧЕСТВО КОМНАТ</p>
          <p className='q-rooms'>2</p>
          <p className='square'>ПЛОЩАДЬ, М²</p>
          <p className='square-info'>73,60</p>
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

export default FlatFive4