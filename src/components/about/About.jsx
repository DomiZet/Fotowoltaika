
import React from 'react';
import './Styles.scss';


function About() {
  return (
    <div className="aboutContainer">
      

      <div className="aboutContent">
          
        <div className="aboutImg">
          <img src={require("../../assets/images/aboutImg.png")}  />
        </div>


        <div className="aboutText">
          <h1>About Us</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>

      </div>


    </div>
  );
}


export default About;