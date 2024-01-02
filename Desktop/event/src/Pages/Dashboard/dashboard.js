import React from 'react';
import '../Dashboard/dashboard.css';
import SideNav from '../../components/sideNav/sidenav';
import out from '../Dashboard/power-off.png'
import user from '../Dashboard/profile.jpeg'
import arrow from '../Dashboard/right-arrow.png'

const Home = () => {
  return (
    <div className="dashboard-container">
        <div className='dashboard-profile'>
            <div className='dashboard-profile-photo'>
                <img src={user} alt='user'></img>
            </div>
            <div className='dashboard-profile-info'>
                <div>
                    Ram Mohan
                    <img src={arrow} alt='user'></img>
                </div>
                <p>rammohan2@gmail.com</p>
            </div>
        </div>
        <div className='dashboard-option'>
            <SideNav />
        </div>
        <div className='dashboard-logout'>
            Logout
            <img src={out} alt='out'></img>
        </div>
    </div>
  );
};

export default Home;
