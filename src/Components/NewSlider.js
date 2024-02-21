import React, { useState, useEffect } from 'react';
import image01 from '../Assets/b3.jpeg';
import image02 from '../Assets/b4.jpeg';
import image03 from '../Assets/i7.jpeg';
import image04 from '../Assets/b5.jpeg';
import image05 from '../Assets/b7.jpeg';
import image06 from '../Assets/c1.jpeg';
import image07 from '../Assets/i1.jpeg';
import image08 from '../Assets/m3.jpeg';
import image09 from '../Assets/w2.jpeg';
import image10 from '../Assets/i5.jpeg';
import image11 from '../Assets/m1.jpeg';
import image12 from '../Assets/p2.jpeg';
import image13 from '../Assets/p3.jpeg';
import image14 from '../Assets/i2.jpeg';

const NewSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageOpacity(0); 
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % 11);
        setImageOpacity(1); 
      }, 1500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const getImageName = (index) => {
    const images = [image09, image07, image11, image03, image04, image12, image01, image06, image05, image08, image13, image10, image02, image14];
    return images[index];
  };

  const containerStyle = {
    width:"50%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5vh'
  };

  const imageStyle = {
    width: 'auto', 
    height: 'auto',
    borderRadius: '10px', 
    transition: 'opacity 1s ease-in-out', 
    opacity: imageOpacity, 
  };

  return (
    <div style={containerStyle}>

      <img
        src={getImageName(imageIndex)}
        alt={`Image ${imageIndex}`}
        style={imageStyle}
      />
    </div>
  );
};

export default NewSlider;