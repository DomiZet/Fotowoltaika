
import React from 'react';
import './Styles.scss';


function Footer() {
  return (
    <div className="footerContainer">
      
      <div className="footerText">
        <h1>Solar</h1>
        <p>
        Sed ut perspiciatis unde omnis iste natus error, totam rem aperiam, eaque veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>

      <div className="footerYork">
      <h1>New York</h1>
      <p>709 Honey creek Dr.</p>
      <p> New York</p>
      <p> NY 10028</p>
      <div></div>
      <p> 1-88-299-2000</p>
      <p> youremail@company.com</p>
      </div>

      <div className="footerLondon">
        <h1>London</h1>
        <p>4821 Willow Greene Drive</p>
        <p> Montgomery</p>
        <p> AL 36109</p>
        <div></div>
        <p> 1-88-299-2000</p>
        <p> youremail@company.com</p>
      </div>


    </div>
  );
}


export default Footer;