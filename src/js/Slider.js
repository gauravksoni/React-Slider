import React, { Component } from 'react';
import '../Style/App.css';


const images=[
  {
    img: require('../Docs/spark.png'),
    name: "Spark Plug",
    process: require('../Docs/009.png')
  },
  {
    img: require('../Docs/0101.png'),
    name: "Cross Head",
    process: require('../Docs/010.png')
  },
  {
    img: require('../Docs/0111.png'),
    name: "Tyre Rim",
    process: require('../Docs/011.png')
  },
  {
    img: require('../Docs/0121.png'),
    name: "Blower Housing",
    process: require('../Docs/012.png')
  },
  {
    img: require('../Docs/0131.png'),
    name: "Connecting Rod",
    process: require('../Docs/013.png')
  },
  {
    img: require('../Docs/0141.png'),
    name: "Propeller Blade",
    process: require('../Docs/014.png')
  },
  {
    img: require('../Docs/0021.png'),
    name: "Crane Hook",
    process: require('../Docs/002.png')
  },
  {
    img: require('../Docs/0031.png'),
    name: "Geneva Plate",
    process: require('../Docs/003.png')
  },
  {
    img: require('../Docs/0061.png'),
    name: "Adjustable Bracket",
    process: require('../Docs/004.png')
  },
  {
    img: require('../Docs/0051.png'),
    name: "Round Gasket",
    process: require('../Docs/005.png')
  },
  {
    img: require('../Docs/0041.png'),
    name: "Idler Plate",
    process: require('../Docs/006.png')
  },
  {
    img: require('../Docs/0071.png'),
    name: "Rocker Arm",
    process: require('../Docs/007.png')
  },
  {
    img: require('../Docs/bracket.png'),
    name: "Steel Bracket",
    process: require('../Docs/008.png')
  },
]


class Slider extends Component{
  constructor(props){
    super(props);
    this.state={
      counter: 1
    }
  };

  nextImage=()=>{
    var counter=this.state.counter;
    this.setState({
      counter : counter+1
    });

    if (counter+1 >= images.length ) {
      this.setState({
        counter: 0
      });
    }
    this.refs.image.src=images[counter].img;
    this.refs.name.innerHTML=images[counter].name;
    this.refs.process.src=images[counter].process;
  };

  render(){
    return(
      <div className="slider">
        <div className="component">
          <div className="component-name">
            <h1 ref="name">{images[0].name}</h1>
          </div>
          <img className="component-image" ref="image" src={images[0].img}/>
        </div>
        <div className="Button">
          <div onClick={this.nextImage}className="Button-next "></div>
        </div>
        <div className="slider-bottom ">
          <img className="process-image slideRight " ref="process" src={images[0].process}/>
        </div>
      </div>
    )
  }
};
export default Slider;
