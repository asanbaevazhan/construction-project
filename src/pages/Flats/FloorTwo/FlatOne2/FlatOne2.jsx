import React from 'react'
import './FlatOne2.scss'
import { useNavigate } from "react-router-dom";
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import Flickity from 'react-flickity-component'

import flatOne from './../../../../assets/flat/квартира 1.jpg'
import flatOne2 from './../../../../assets/img2/1.png'
import SliderFlatOne from '../../../../components/Slider/FlatOne/SliderFlatOne';

const flickityOptions = {
  initialIndex: 2
}
function FlatOne2() {
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
        <div className='side' >
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
            <p>ЖК "CONSTRUCTION"</p>
          </div>
        </div>

        <div className="flat-one-info">
          <SliderFlatOne/>
          
          {/* <img src={flatOne} alt="" /> */}

         <div className="flat-text-info">
          <p className='rooms'>КОЛИЧЕСТВО КОМНАТ</p>
          <p className='q-rooms'>2</p>
          <p className='square'>ПЛОЩАДЬ, М²</p>
          <p className='square-info'>78,77</p>
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

export default FlatOne2