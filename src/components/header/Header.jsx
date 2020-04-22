
import React from 'react';
import './Styles.scss';


function Header() {
  return (
    <div className="headerContainer">
      
      <div className="navBar">

          <div className="logo">
            Solar
          </div>

          <div className="menu">
              <div>
                Home
              </div>
              <div>
                About us
              </div>
              <div>
                Services
              </div>
              <div>
                Portfolio
              </div>
              <div>
                Review
              </div>
              <div>
                Contact
              </div>
          </div>


      </div>

      <div className="welcomeText">
        <p>
          Make the <b>best decision</b> for your roof and home.
        </p>
      </div>


    </div>
  );
}


export default Header;