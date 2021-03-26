import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="top">
        <a href="#">Uber</a>
        <a href="#">Visit Help Center</a>
        <a href="#">Do not sell my info (California)</a>
      </section>
      <section className="middle">
        <section className="left">
          <p>Company</p>
          <a href="#">About us</a>
          <a href="#">Our offerings</a>
          <a href="#">Newsroom</a>
          <a href="#">Investors</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">AI</a>
        </section>
        <section className="right">
          <p>Products</p>
          <a href="#">Ride</a>
          <a href="#">Drive</a>
          <a href="#">Eat</a>
          <a href="#">Uber for Business</a>
          <a href="#">Uber Freight</a>
        </section>
      </section>
      <section className="bottom">
        <p>Global Citizenship</p>
        <a href="#">Safety</a>
        <a href="#">Diversity and Inclusion</a>
      </section>
    </>
  )
}

export default Footer;
