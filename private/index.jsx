import React from "react";
import ReactDOM from "react-dom";
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello React</p>
    );
  }
});
 
ReactDOM.render(<HelloWorld />, document.getElementById("#container")); 
