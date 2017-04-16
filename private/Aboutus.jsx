import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import './assets/scss/tab.scss';

var jsonData = require('./jsonData.json');



var InputData=React.createClass({

 getInitialState: function() {
    return {
         inValue:'change data here...',
	changeValue:'change data here...'
       };
   },
inputValue:function(e){
var val=e.target.value;
console.log("input value is = "+val);
this.setState({
inValue:val
})
},

changeData:function(){
var allVal=[];
var changeval=document.getElementById('selectVal').value;
allVal.push(changeval);
console.log(allVal);
this.setState({
changeValue:allVal
})
},
render:function(){
var jsonData=this.props.jsonData;
console.log(jsonData);
return(
<div className="container-fluid">
<div className="row">
<input type="text" onChange={this.inputValue} />
<div className="dataStore">{this.state.inValue}</div>
</div>
<div className="row">
<h3> Where do you live?</h3>
<select onChange={this.changeData} id="selectVal">
<option value="0" selected="selected">Choose city</option>
<option value="DElhi">DElhi</option>
<option value="MUMBAI">MUMBAI</option>
<option value="KOLKATA">KOLKATA</option>
<option value="CHENAI">CHENAI</option>
</select>
<div className="dataStore">{this.state.changeValue}</div>
</div>

<div className="row">
<h3>{jsonData.glossary.title}</h3>

</div>

</div>
);
}
})


import AllContent from './allTech'

const MODALTest = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <p>Click to get the full Modal experience!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Launch demo modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
             <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />      
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});




var AboutUs=React.createClass({
render:function(){
return(<div>
<div className="row banner">
	<div className="col-md-12">
		<img src="../assets/images/banner.png" />
	</div>
</div>

<header>
	<h3>Rabindra kumar singh</h3>
</header>

<div className="row">
   <div className="col-sm-12">     
         <p>
	I am involved more than 5+ years in online industries. During this time period I develop and work on e-Commerce, e-learning, healthcare etc. domain and along with technology I understood product life cycle as well for these domain. Also I develop lot’s of websites, portals, micro sites and many more things which in relate to online industries.
<br/>
I'm currently working with e-bee global solutions as a UI Developer, here I involved in front-end development as well. My specialization is UI development. 
<br/>
The language in which I am comfortable is English and Hindi. <br/>
	</p>
          <p className="text-center"><a className="btn btn-default" href="#" role="button">
		<span className="icon-admin"></span>		
	View details »</a></p>
        </div>

      </div>
<div className="row">
<div className="col-sm-12">
<h2> My Projects </h2>
<Tabs>
     <ul className="nav nav-tabs nav-justified customTabH">
        <li><TabLink to="tab1" className="customRound" id="tabbb">All</TabLink></li>
        <li><TabLink to="tab2"  className="customRound">HTML/css</TabLink></li>
        <li><TabLink to="tab3"  className="customRound">REACT/REDUX</TabLink></li>
	<li><TabLink to="tab4"  className="customRound">JAVASCRIPT/JQUERY</TabLink></li>
    </ul>
 
    <div className="row customTabContent">
        <TabContent for="tab1"> 
		<AllContent technology="Hi I know html5,css3,javascript,jquery,twitter Bootstrap React and Redux"/>	
	</TabContent>
        <TabContent for="tab2"> HTML/css content here...</TabContent>
        <TabContent for="tab3"> <InputData jsonData={jsonData}/></TabContent>
        <TabContent for="tab4"> JAVASCRIPT/JQUERY content here...</TabContent>
    </div>
</Tabs>
	</div>
</div>
</div>
)
}
});



module.exports=AboutUs;



