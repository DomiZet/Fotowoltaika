
import React from 'react';
import './Styles.scss';
import { Input } from 'antd';
import { Button } from 'antd';



function Contact() {

  const { TextArea } = Input;

  return (
    <div className="contactContainer">
      
      <h1>Contact us</h1>

      <div className="formWrap">

          <div className="contactDetails">
            <h2>Solar</h2>
            <p>709 Honey Creek Dr.</p>
            <p>New York</p>
            <p>NY 10028</p>
            <img src={require("./../../assets/images/map.png")} />
          </div>

          <div className="contactForm">
            <Input placeholder="Name" />
            <br />
            <Input placeholder="Email" />
            <br />
            <br />
            <TextArea rows={10} />
          </div>

      </div>

      <Button>Submit</Button>

      <div></div>

    </div>
  );
}


export default Contact;




