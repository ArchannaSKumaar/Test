import React from 'react';
import '../Dashboard/dashboard.css';
import SideNav from '../../components/sideNav/sidenav';

const Home = () => {
  return (
    <div className="dashboard-container">
        <div className='dashboard-profile'>
            <div className='dashboard-profile-photo'>
                icon
            </div>
            <div className='dashboard-profile-info'>
                <div>
                    <p>Ram Mohan</p>
                    {/* icon here */}
                </div>
                <p>rammohan2@gmail.com</p>
            </div>
        </div>
        <div className='dashboard-option'>
            <SideNav />
        </div>
        <div className='dashboard-logout'>
            <p>Logout</p>
            {/* icon */}
        </div>
    </div>
  );
};

export default Home;
