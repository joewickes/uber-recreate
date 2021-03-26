import React, { useState } from 'react';
import './../styles/About.css';

const About = () => {
  const [info] = useState([
    {icon: null, title: 'About us', description: 'Find out how we started, what drives us, and how we\'re igniting opportunity.'},
    {icon: null, title: 'Newsroom', description: 'See announcements about our latest releases, initiatives, and partnerships.'},
    {icon: null, title: 'Global citizenship', description: 'Read about our commitment to making a positive impact in the cities we serve'}
  ]);

  return (
    <section className="About">
      <ul className="info">
        {info.map(piece => {
          return (
            <li>
              <h3>{piece.title}</h3>
              <p>{piece.description}</p>
              <a href="#">Learn more</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default About;
