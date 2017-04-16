import React from 'react';
import ReactDOM from 'react-dom';


import MyApp from './App.jsx';
import MenuBar from './menu.jsx';



import './assets/scss/style.scss';


var App=React.createClass({
componentDidMount() {
	this.interval=setInterval(this.increment,1000);
  console.log("component Did Mount");
   },
componentWillMount() {
  console.log("Component WILL MOUNT!");
   },

getInitialState:function(){
	console.log("get initial state");
  	return{
		count:5
	}
},
increment:function(){
	this.setState({
		count:this.state.count+1
	})
},

decrement:function(){
if(this.state.count>0){	
	this.setState({
	
	count:this.state.count-1
	
})
}
},
getDefaultProps:function(){
  console.log("get Default props");
	
},
  componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   },

componentWillUnmount:function(){
	console.log("component Will Unmount ");
	clearInterval(this.interval);
},
componentDidUpdate:function(prevProps,prevState){

console.log("previous props is =", prevProps);
console.log("previous state is =", prevState);
console.log(ReactDom.findDomNode(this));
},
 componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   },





render:function(){
	var data=this.props.data;
	console.log(data);
		

	return(<div className="container">
	<div className="logo"><img src="httP://localhost:3000/assets/images/logo.png" /></div>
	<MenuBar ListData={this.props.data}/>
		<h1>{this.state.count}</h1>
<button onClick={this.increment}>ADD BUTTON</button>
<button onClick={this.decrement}>Minus BUTTON</button>

<MyApp />
	</div>);

},


componentDidMount(){

	console.log("after renderd");
	console.log(this.state.count);
	
	
}
});

var Menudata = ['Home','About Us','Contact Us','Profile','Product Detail','harmeek','rabindra'];



ReactDOM.render(<App data={Menudata}/>, document.getElementById('main-content'));



