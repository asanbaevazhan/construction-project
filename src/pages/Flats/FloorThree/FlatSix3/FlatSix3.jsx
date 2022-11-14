import React from 'react'
import './FlatSix3.scss'
import { useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import flatSix from './../../../../assets/flat/квартира 6.png'

function FlatSix3() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/floor-four');
  }
  const handleBack = () => {
    navigate('/floor-two');
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
            <p>3</p>
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
        <img src={flatSix} alt="" />

       <div className="flat-text-info">
        <p className='rooms'>КОЛИЧЕСТВО КОМНАТ</p>
        <p className='q-rooms'>1</p>
        <p className='square'>ПЛОЩАДЬ, М²</p>
        <p className='square-info'>44,41</p>
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

export default FlatSix3