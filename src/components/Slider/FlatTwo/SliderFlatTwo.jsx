import React, { useState } from 'react'

const SliderFlatTwo = ({slides}) => {
    const[currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: "100%",
        position: "relative",
    }
    const slideStyles ={
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage:`url(${slides[currentIndex].url})`
    }

    const leftArrowStyles ={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: "32px",
        fontSize: '45px',
        color: '#000',
        zIndex: 1,
        cursor: "pointer",
    }
    const rightArrowStyles ={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: "32px",
        fontSize: '45px',
        color: '#000',
        zIndex: 1,
        cursor: "pointer",
    }
  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles}> Left arrow</div>
        <div style={rightArrowStyles}>Right arrow</div>
        <div style={slideStyles}></div>
    </div>
  )
};

export default SliderFlatTwo