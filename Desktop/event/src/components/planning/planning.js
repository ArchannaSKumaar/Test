import React from 'react';
import '../planning/planning.css';

const cards = [
  {
    capt: 'Free forever',
    heading: 'Free Starter',
    des: 'The quickest and easiest way to try Protocols with basic functionalities',
    method: 'Get Started',
    features: ['Upto 8 Users', 'Upto 3gb Storage', 'Email Support', 'Basics of Documents, Task flow. Voting, Accounting, Banking, Notes, INvestors, Director and Team Management included'],
  },
  {
    capt: "Let's Connect",
    heading: 'Enterprise Plan',
    des: 'Effortlessly customize and fine-tune service as your needs shifts, ensuring the perfect tools for success',
    method: 'Contact Us',
    features: ['More than 75 users', 'Customization of all other features'],
  },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
            <div className='card1'>
                <div className={`card-capt color-${index + 1}`}>{card.capt}</div>
                <h2>{card.heading}</h2>
                <p className='card-des'>{card.des}</p>
                <div className={`card-capt color-${index + 1}`}>{card.method}</div>
            </div>
          <div className='card2'>
          <ul>
            {card.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
