import React from 'react';
import { Parallax } from "react-parallax";
import '../imageSlider/imageslide.css';
import image1 from '../imageSlider/image1.jpeg';
import image2 from '../imageSlider/image2.jpg';
import image3 from '../imageSlider/image3.jpg';


const ImageSlider = () => {

  return (
    <div>
      <div className='parallax-container '>
        <Parallax bgImage={image1} strength={800}>
          <div style={{ height: 500 }}>
          </div>
        </Parallax>
      </div>
      <Parallax bgImage={image3} strength={500}>
        <div style={{ height: 700 }}>
        </div>
      </Parallax>
      <Parallax bgImage={image2} strength={-100}>
      <div style={{ height: 500 }}>
      </div>
      </Parallax>
    </div>
  );
};

export default ImageSlider;

