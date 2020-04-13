
import React from 'react';
import './Styles.css';


function Header() {
  return (
    <div className="headerContainer">
      
      <div className="menuContainer">

        <div className="logo"></div>

        <div className="menu">

          <div>Home</div>
          <div>About us</div>
          <div>Services</div>
          <div>Portfolio</div>
          <div>Review</div>
          <div>Contact</div>


        </div>


      </div>

      <div className="welcomeText">
        Make the <b>best decision</b> for your roof and home.
      </div>


    </div>
  );
}


export default Header;