import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/1.jfif'
 const  SimpleSlider=()=> {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
 
    
  };
 
  return (
   
    <Slider {...settings}  >
      <div>
      <img src="https://source.unsplash.com/random/1100x1100?food" className="full-width-image" width="100%" height="300px"/>
      </div>
      <div>
      <img src="https://source.unsplash.com/random/1000x1000?food" className="full-width-image" width="100%" height="300px"/>
      </div>
      <div>
      <img src="https://source.unsplash.com/random/1000x1000?food"  className="full-width-image" width="100%" height="300px" />
      </div>
      <div>
      <img src="https://source.unsplash.com/random/1000x1000/?food"  className="full-width-image" width="100%" height="300px"/>
      </div>
      <div>
      <img src="https://source.unsplash.com/random/1000x1000?food"className="full-width-image" width="100%" height="300px" />
      </div>
      <div>
      <img src="https://source.unsplash.com/random/1000x1000?food"  className="full-width-image" width="100%" height="300px"/>
      </div>
    </Slider>
    
  );
}
export default  SimpleSlider