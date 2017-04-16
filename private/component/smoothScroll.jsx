"use strict";

var React     = require('react');
var ReactDOM  = require('react-dom');
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

var Section = React.createClass({

  scrollToTop: function() {
    scroll.scrollToTop();
  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  render: function () {
    return (
      <div>
    
		

<div><Link  className="test2" to="test2">Test 2</Link></div>
<div><Link  className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></div>
<div><Link  className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></div>
<div><Link  className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5</Link></div>
<div><Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6</Link></div>

        <Element id="test1">
		<p>first 1</p>
          <h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3>
        </Element>

        <Element id="test2">
          <p>first 2</p>
          <h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3>
        </Element>

        <Element id="test3">
          <p>first 3 </p>
          <h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3>
        </Element>

        <Element id="test4">
          <p>first 4</p>
          <h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3>
        </Element>

        <Element id="test5">
          <p>first 5</p>
          <h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3>
        </Element>

        <div id="anchor">
          <p>first 6</p>
          <h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3><h3>hhhhh</h3>
        </div>


      </div>
    );
  }
});


module.exports=Section;
