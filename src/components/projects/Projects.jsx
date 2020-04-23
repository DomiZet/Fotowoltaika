
import React from 'react';
import './Styles.scss';


class Projects extends React.Component {
  state={
    numberImgToDisplay: 1,
    // imgsToDisplay: [1]
    imgsToDisplay: [1, 2, 3, 4]
    
  }

  render() {

    return (
      
      <div className="projectContainer">
          
        <h1>Our Projects</h1>

        
        <div className="projectWrap">
        <div>

          {
            this.state.imgsToDisplay.map((img) => {
              return (
                <img width={300} src={require(`../../assets/images/projects/proj${img}.png`)} />
              )
              
            }

            )
          }
        </div>


    
        </div>

        <button onClick={this.addMoreImg}>
          Load More
        </button>


      </div>
      
    );


  }


  addMoreImg = () => {
    
    // this.setState ({
    //    numberImgToDisplay: this.state.numberImgToDisplay + 1,
    //   })

    
    // this.state.imgsToDisplay.push(this.state.numberImgToDisplay)
    
    
    
    this.state.imgsToDisplay.push(5, 6, 7, 8)

    this.setState({})
 
    // this.setState.imgsToDisplay.push(5)


  }



}


export default Projects;



