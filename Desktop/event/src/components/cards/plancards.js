/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../cards/plancard.css';
import arrow from '../cards/right-arrow.png';
import email from '../cards/email.png';
import user from '../cards/user.png';
import cloud from '../cards/cloud-computing.png';

const plans = [
  {
    type: 'Basic',
    oldprice: '$89.99/mo',
    price: '$9.99/mo',
    image: [user, cloud, email],
    features: ['Upto 25 Users', 'Upto 25gb Storage', 'Email Support'],
  },
  {
    type: 'Premium',
    oldprice: '$189.99/mo',
    price: '$99.99/mo',
    image: [user, cloud, email],
    features: ['Upto 50 Users', 'Upto 60gb Storage', 'Email+Chat Support'],
  },
  {
    type: 'Standard',
    oldprice: '$389.99/mo',
    price: '$199.99/mo',
    image: [user, cloud, email],
    features: ['Upto 75 Users', 'Upto 100gb Storage', 'Email+Chat+Whatsapp Support'],
  },
];

const PlanCard = () => {
  return (
    <div className="plan-container">
      {plans.map((plan, index) => (
        <div key={index} className="plan-card">
          <h2>{plan.type}</h2>
          <p className='plan-strick'>{plan.oldprice}</p>
          <p>{plan.price}</p>
          <div className={`plan-starting color-${index + 1}`}>Get Started
          <img src={arrow} alt='arrow'></img>
          </div>
          <hr/>
          <ul>
            <h6>What you'll get :</h6>
            {plan.features.map((feature, featureIndex) => (
                <><img src={plan.image[featureIndex]} alt='icon'></img>
                <li key={featureIndex}>
                    {feature}
                </li><br></br></>
            ))}
          </ul>
          <a>EXPLORE FEATURES</a>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
