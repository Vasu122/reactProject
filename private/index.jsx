import React from "react";
import ReactDOM from "react-dom";


import HelloApp from './App';

var HelloWorld = React.createClass({
  render: function() {
	
var bgc="red";
var colorr="#fff";

    return (<div>
      <p style={{background:bgc,color:colorr}}>Hello React</p>
	<HelloApp />
    </div>);
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById("container"));
