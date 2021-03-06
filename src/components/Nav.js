import React, { useState } from 'react';
import './../styles/Nav.css';

const Nav = () => {
  const [buttons] = useState([
    {name: 'Eat', icon: null},
    {name: 'Ride', icon: null},
    {name: 'Earn', icon: null},
    {name: 'Freight', icon: null},
    {name: 'Business', icon: null},
    {name: 'Transit', icon: null}
  ])
  return (
    <section className="Nav">
      <ul className="nav-buttons">
        {buttons.map(button => {
          return (<li>{button.name}</li>);
        })}
      </ul>
    </section>
  );
}

export default Nav;
