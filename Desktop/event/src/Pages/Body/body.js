import React from 'react';
import '../Body/body.css';
import PlanCard from '../../components/cards/plancards';
import Planning from '../../components/planning/planning';

const Home = () => {
  return (
    <div className="body-container">
        <div className="body-head">
            <h2>Choose a plan that's just right for you !</h2>
            <div className='body-plan'>
                <div className='body-plan-monthly'><p>Monthly</p></div>
                <div className='body-plan-annual'><p>Annually <sup>-10%</sup></p></div>
            </div>
        </div>
        <div className='body-cards'>
            <PlanCard/>
        </div>
        <div className='body-planning'>
            <Planning />
        </div>
        <p className='body-dialogue'>*some unique features are provided as add-ons with individual plans for each features</p>
    </div>
  );
};

export default Home;
