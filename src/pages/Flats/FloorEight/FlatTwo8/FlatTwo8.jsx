import React from 'react'
import './FlatTwo8.scss'
import { useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import SliderFlatTwo from '../../../../components/Slider/FlatTwo/SliderFlatTwo';

function FlatTwo8() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/floor-seven');
  }
  const handleCancel = () => {
    navigate(-1);
  }
  return (
    <div className='flat-one'>
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
          <p>ЖК "АТМОСФЕРА"</p>
          </div>
        </div>

        <div className="flat-one-info">
          <SliderFlatTwo/>

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

export default FlatTwo8