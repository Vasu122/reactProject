import React from 'react';
import ReactDOM from 'react-dom';

var Projects=React.createClass({
getInitialState:function(){
 return{
  projectShow:false
}
},
render:function(){


return(
	  <ProjectItem projects={projects}/>
);
}
});

var ProjectItem=React.createClass({
	render:function(){
	
console.log("this.props.projects");
console.log(this.props.projects);
var Allweb=this.props.projects;

return(<div>
{Allweb.map(function(titlekey,index){
	return(
	<div className="row">
		<div className="col-sm-6">{titlekey.title}</div>
		<div className="col-sm-6">{titlekey.JobRole}</div>
	</div>
)})}
</div>);
}
});

var projects=[
{
title:'Hospital Website',
JobRole:'Designer'
},
{
title:'Education Website',
JobRole:'FrontEnd Developer'
},
{
title:'Ecommerce Website',
JobRole:'UI DEveloper'
}
];
module.exports=Projects;
