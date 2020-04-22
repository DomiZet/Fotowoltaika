

import React from 'react';
import './Styles.scss';


function Services() {
  return (
    <div className="servicesContainer">


    <div className="servicesTitle">
      <h1>
        Our Services
      </h1>
    </div>


      <div className="servicesWrap">


        <div className="serviceItem">
          <img src={require("../../assets/images/item1.png")}/>
          <h3>New Roof</h3>
          <p>
          Lorem ipsum dolor sit amet, elit sed do eiusmod tempor.
          </p>
        </div>


        <div className="serviceItem">
          <img src={require("../../assets/images/item2.png")}/>
          <h3>Roof Replacement</h3>
          <p>
          Lorem ipsum dolor sit amet, elit sed do eiusmod tempor.
          </p>
        </div>


        <div className="serviceItem">
          <img src={require("../../assets/images/item3.png")}/>
          <h3>Roof Repair</h3>
          <p>
          Lorem ipsum dolor sit amet, elit sed do eiusmod tempor.
          </p>
        </div>
      
      </div>


      <div className="servicesWrap">

        <div className="serviceItem">
          <img src={require("../../assets/images/item4.png")}/>
          <h3>Gutter Services</h3>
          <p>
          Lorem ipsum dolor sit amet, elit sed do eiusmod tempor.
          </p>
        </div>


        <div className="serviceItem">
          <img src={require("../../assets/images/item5.png")}/>
          <h3>Siding</h3>
          <p>
          Lorem ipsum dolor sit amet, elit sed do eiusmod tempor.
          </p>
        </div>


        <div className="serviceItem">
          <img src={require("../../assets/images/item6.png")}/>
          <h3>Waterproofing</h3>
          <p>
          Lorem ipsum dolor sit amet, elit sed do eiusmod tempor.
          </p>
        </div>

      </div>


    </div>

  );
}


export default Services;