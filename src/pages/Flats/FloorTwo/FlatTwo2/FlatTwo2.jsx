import React from 'react'
import './FlatTwo2.scss'
import { useNavigate } from "react-router-dom";
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import SliderFlatTwo from './../../../../components/Slider/FlatTwo/SliderFlatTwo'
import flatTwo from './../../../../assets/flat/квартира 2.jpg'

import img1 from './../../../../assets/flat/квартира 2.jpg'
import img2 from './../../../../assets/img2/2.png'


function FlatTwo2() {
  const navigate = useNavigate();
   
  const handleNext = () => {
    navigate('/floor-three');
  }

  const handleCancel = () => {
    navigate(-1);
  }

  const slides = [
    {url: img1},
    {url: img2},
  ]

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: "0 auto"
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
          {/* <div style={containerStyles}>
            <SliderFlatTwo slides={slides}/>
          </div> */}
          

          {/* <img src={flatTwo} alt="" /> */}

         

         <div className="flat-text-info">
          <p className='rooms'>КОЛИЧЕСТВО КОМНАТ</p>
          <p className='q-rooms'>1</p>
          <p className='square'>ПЛОЩАДЬ, М²</p>
          <p className='square-info'>47,98</p>
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

export default FlatTwo2