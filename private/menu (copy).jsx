import React from 'react';
import ReactDOM from 'react-dom';

import {Link  } from 'react-router';

var MenuBar=React.createClass({

getInitialState:function(){
return{
dropdown:false
}
},

dropdownOpen:function(){
	this.setState({
	dropdown:!this.state.dropdown
})
},


	render:function(){
	return(<div>
<div className="navbar-wrapper">
      <div className="container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
		<img src="../assets/images/logo.png" />
		</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success">Sign in</button>
          </form>
        </div>	
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
		<li><Link to="/" activeClassName="active">Home</Link></li>
		<li><Link to="/contact" activeClassName="active">Contact Us</Link></li>
		<li><Link to="/about" activeClassName="active">About Us</Link></li>
                <li className={this.state.dropdown ? 'dropdown open':'dropdown'} onClick={this.dropdownOpen}>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <Dropdown />
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>

      <div className="container">
                    {this.props.children}
       </div>
</div>
);

}

});

var Dropdown=React.createClass({
	render:function(){
return(<ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li className="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>);
}
});
module.exports=MenuBar;


