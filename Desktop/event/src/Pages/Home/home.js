import React from 'react';
import '../Home/home.css';
import Dashboards from '../Dashboard/dashboard.js';
import ImageSlider from '../imageSlider/imageslide.js'
import Body from '../Body/body.js';
import arrow from '../Home/arrow-down-sign-to-navigate.png';
import logo from '../Home/logo.jpeg';
import profile from '../Home/companyProfile.jpeg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-header">
        <div className='home-logo'>
          <img src={logo} alt='logo' className='images'></img>
        </div>
        <div className='home-profile'>
          <div className='home-profile-Infor'>
            <div className='home-profile-logo'>
              <img src={profile} alt='profile' className='images'></img>
            </div>
            <div className='home-profile-caption'>
              <p>XYZ Enterprises Pvt. Ltd</p>
            </div>
          </div>
          <div className='home-arrow'>
            <img src={arrow} alt='arrow'></img>
          </div>
        </div>
      </div>
      <div className='body-imageslider'>
        <ImageSlider/>
      </div>
      <div className='home-body'>
        <Dashboards />
         <Body />
      </div>
    </div>
  );
};

export default Home;
