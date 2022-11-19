import React from 'react'
import './FlatThree2.scss'
import { useNavigate } from "react-router-dom";
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

import flatThree from './../../../../assets/flat/квартира 3.jpg'
import SliderFlatThree from '../../../../components/Slider/FlatThree/SliderFlatThree';

function FlatThree2() {
  const navigate = useNavigate();
  
  const handleNext = () => {
    navigate('/floor-three');
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <div className='flat-one'>
      <div className="floor-one-page-wrapper">
        <div className='side-one' >
          <div className="pagination">
            <UpOutlined 
              style={{ fontSize: '100px', color: '#756b60'}}
              onClick={handleNext}
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

        <div className="flat-one-info">
          <SliderFlatThree/>

         <div className="flat-text-info">
          <p className='rooms'>КОЛИЧЕСТВО КОМНАТ</p>
          <p className='q-rooms'>1</p>
          <p className='square'>ПЛОЩАДЬ, М²</p>
          <p className='square-info'>47,98</p>
         </div>
        </div>

        <div className="cancel-one" >
            <CloseOutlined 
            onClick={handleCancel}
              style={{ fontSize: '40px', color: '#756b60'}}
            />
        </div>

      
      </div>

      
    </div>
  )
}

export default FlatThree2