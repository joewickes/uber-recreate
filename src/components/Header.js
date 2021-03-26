import React from 'react';
import './../styles/Header.css';

const Header = () => {
  return (
    <section className="Header">
      <section className="left">
        {/*Uber Logo*/}<div>Uber</div>
      </section>
      <section className="right">
        {/*Icon*/}<div>i</div>
        <button className="SignUp">Sign up</button>
        {/*Hamburger Menu*/}<div>=</div>
      </section>
    </section>
  );
}

export default Header;
