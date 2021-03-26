import React from 'react';
import './../styles/Eats.css';

const Eats = () => {
  return (
    <section className="Eats">
      <section className="top">
        <h2>Discover delicious eats</h2>
        <p>Order delivery from restaurants you love.</p>
      </section>
      <section className="bottom">
        <button className="order-now">Order now</button>
        <a href="#">Own a restuarant? Partner with Uber Eats</a>
      </section>
    </section>
  );
}

export default Eats;
