import React from 'react';
import '../planning/planning.css';
import arrow from '../planning/right-arrow.png';
import email from '../planning/email.png';
import user from '../planning/user.png';
import cloud from '../planning/cloud-computing.png';
import tick from '../planning/double-tick.png';

const cards = [
  {
    capt: 'Free forever',
    heading: 'Free Starter',
    des: 'The quickest and easiest way to try Protocols with basic functionalities',
    method: 'Get Started',
    image: [user, cloud, email, tick],
    features: ['Upto 8 Users', 'Upto 3gb Storage', 'Email Support', 'Basics of Documents, Task flow. Voting, Accounting, Banking, Notes, INvestors, Director and Team Management included'],
  },
  {
    capt: "Let's Connect",
    heading: 'Enterprise Plan',
    des: 'Effortlessly customize and fine-tune service as your needs shifts, ensuring the perfect tools for success',
    method: 'Contact Us',
    image: [user, tick],
    features: ['More than 75 users', 'Customization of all other features'],
  },
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
            <div className='card1'>
                <div className={`card-capt1 color-${index + 1}`}>{card.capt}</div>
                <h2>{card.heading}</h2>
                <p className='card-des'>{card.des}</p>
                <div className={` card-capt color-${index + 1}`}>{card.method}
                    <img src={arrow} alt='arrow' ></img>
                </div>
            </div>
          <div className='card2'>
          <ul>
            <h6>What you'll get :</h6>
            {card.features.map((feature, featureIndex) => (
                <><img src={card.image[featureIndex]} alt='icon'></img>
                <li key={featureIndex}>
                    {feature}
                </li><br></br></>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
