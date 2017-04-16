import React, { Component } from 'react';
import { render } from 'react-dom';

import { Router, Route, Link, browserHistory, IndexRoute,Redirect  } from 'react-router';

import './assets/scss/style.scss';

import Main from './menu';
import Home from './Home';
import About from './Aboutus';
import Contact from './Contactus';
import smoothScroll from './component/smoothScroll';
import Projects from './projects';





render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
	   <Route path="/smoothScroll" component={smoothScroll}/>	
	   <Route path="/projects" component={Projects} />
	   
	   		
        </Route>
    </Router>,
    document.getElementById('main-content')
);
