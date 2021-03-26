import React from 'react';

const Header = () => {
  return (
    <>
      <section className="left">
        {/*Uber Logo*/}<div>Uber</div>
      </section>
      <section className="right">
        {/*Icon*/}<div>i</div>
        <button className="SignUp">Sign up</button>
        {/*Hamburger Menu*/}<div>=</div>
      </section>
    </>
  );
}

export default Header;
