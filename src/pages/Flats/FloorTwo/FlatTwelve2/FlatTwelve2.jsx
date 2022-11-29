import React from 'react'
import './FlatTwelve2.scss'
import { useNavigate } from "react-router-dom";
import { UpOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import SliderFlatTwelve from '../../../../components/Slider/FlatTwelve/SliderFlatTwelve';


function FlatTwelve2() {
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
            className='up-icon'
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
        <SliderFlatTwelve/>

       <div className="flat-text-info">
        <p className='rooms'>КОЛИЧЕСТВО КОМНАТ</p>
        <p className='q-rooms'>2</p>
        <p className='square'>ПЛОЩАДЬ, М²</p>
        <p className='square-info'>70,52</p>
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

export default FlatTwelve2