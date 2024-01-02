/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../cards/plancard.css';

const plans = [
  {
    type: 'Basic',
    oldprice: '$89.99/mo',
    price: '$9.99/mo',
    features: ['Upto 25 Users', 'Upto 25gb Storage', 'Email Support'],
  },
  {
    type: 'Premium',
    oldprice: '$189.99/mo',
    price: '$99.99/mo',
    features: ['Upto 50 Users', 'Upto 60gb Storage', 'Email+Chat Support'],
  },
  {
    type: 'Standard',
    oldprice: '$389.99/mo',
    price: '$199.99/mo',
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
          <div className={`plan-starting color-${index + 1}`}>Get Started</div>
          <hr/>
          <ul>
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
          <a>EXPLORE FEATURES</a>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
