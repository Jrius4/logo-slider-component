import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import data from "./data";
import "./style.css";

class SliderComponent extends React.Component { 

  responsive={
    0:{items:2},
    600:{items:3},
    900:{items:3},
    1024:{items:4},
  };

  galleryItems() {
    return (
      data.properties.map((item, i) => (
        <div key={`key-${i}`} className="slide-item"><h3>{item.name}</h3>
        <img style={{width:"100px",height:"100px"}} src={item.picture} alt="..."/>
        
        </div>
      ))
    )
  };

 
render(){
  const items = this.galleryItems();

  return (
    <div>
          <AliceCarousel
          style={{color:"red"}}
        items={items}
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        buttonsDisabled={true}
        dotsDisabled={true}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        responsive={this.responsive}
        disableAutoPlayOnAction={false}
       
      />
    </div>
  )
}

}

export default SliderComponent;