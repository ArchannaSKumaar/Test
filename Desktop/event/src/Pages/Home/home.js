import React from 'react';
import '../Home/home.css';
import Dashboards from '../Dashboard/dashboard.js';
import Body from '../Body/body.js';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="home-header">
        <div className='home-logo'>
        This is a title!
        </div>
        <div className='home-profile'>
          <div className='home-profile-Infor'>
            <div className='home-profile-logo'>
              logo
            </div>
            <div className='home-profile-caption'>
              <p>XYZ Enterprises Pvt. Ltd</p>
            </div>
          </div>
          <div className='home-arrow'>
            dwn-arrow
          </div>
        </div>
      </div>
      <div className='home-body'>
        <Dashboards />
         <Body />
      </div>
    </div>
  );
};

export default Home;
