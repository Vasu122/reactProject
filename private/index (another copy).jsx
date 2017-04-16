import React from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, Link, browserHistory, IndexRoute,Redirect  } from 'react-router';


const App =() =>(
<div>
<h2>App home</h2>
<Link to="/About">About</Link>
<Link to="/Contact">Contact</Link>
</div>
);

const About =() =>(
<div>
<h2>App About Us</h2>
<Link to="/Contact">Contact</Link>
<Link to="/">App</Link>
</div>
);
const Contact =(props) =>(
<div>
<h2>App Contact us </h2>
<Link to="/">App</Link>
<Link to="/About">About</Link>
{props.children}
<Link to="/Contact/Sports">Sports</Link>
{ ' '}
<Link activeClassName="active" to="/Contact/City">City</Link>
</div>
);

const Sports =() =>(
<div>
<h2>App Sports us </h2>

</div>
);

const City =() =>(
<div>
<h2>App City us </h2>
</div>
);

const ContactIndex =() =>(
<div>
<h2> ContactIndex </h2>
</div>
);


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
      <Route path = "/About" component = {About} />
      <Route path = "/Contact" component = {Contact}>
	<IndexRoute component={ContactIndex} />
	<Route path = "Sports" component = {Sports} />
	<Route path = "City" component = {City} />
     </Route>
	
         
      
   </Router>
	
), document.getElementById('main-content'))



