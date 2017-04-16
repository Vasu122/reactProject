import React from 'react';
import ReactDOM from 'react-dom';

var Slider = require('react-slick');

var ImageSlider=React.createClass({
 render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     autoplay:true	
    };
    return (
      <Slider {...settings}>
        <div><img src="../assets/images/banner1.jpg" /></div>
        <div><img src="../assets/images/banner2.jpg" /></div>
	<div><img src="../assets/images/banner3.jpg" /></div>
	<div><img src="../assets/images/banner4.jpg" /></div>
	
      </Slider>
    );
  }
});

var Homepage = React.createClass({
  render: function() {
    return (
      <div>
 		<ImageSlider />
      </div>
    );
  }
});
module.exports=Homepage;
