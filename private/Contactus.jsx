import React from 'react';
import ReactDOM from 'react-dom';
import ProfileName from './component/todoItem';
import TodoForm from './component/todoForm';


class Profile extends React.Component{
constructor(){
  super();
this.changeStatus=this.changeStatus.bind(this);
this.updatetask=this.updatetask.bind(this);
this.addTask=this.addTask.bind(this);
this.deleteTask=this.deleteTask.bind(this);


	this.name="bahadur yadav";
this.state={
tasks:[
{
name:'Rahul',
completed:false
},
{
name:'Bittu',
completed:false
},
{
name:'Vasudev',
completed:false
}

],
currentTask:''	
}
}
updatetask(newValue){
this.setState({
currentTask:newValue.target.value
})

}
addTask(evt){
evt.preventDefault();
let tasks=this.state.tasks;
let currentTask=this.state.currentTask;
tasks.push({
name:currentTask,
completed:false
})

this.setState({
tasks:tasks,
currentTask:''
})
}

changeStatus(index){
var tasks =this.state.tasks;
var task=tasks[index];
task.completed=!task.completed;
this.setState({
  tasks:tasks
})
}
deleteTask(index){
console.log(index);
let tasks=this.state.tasks;
tasks.splice(index,1);
this.setState({
	tasks:tasks
})
}


	render(){
return(
<section>
<TodoForm currentTask={this.state.currentTask} updatetask={this.updatetask} addTask={this.addTask} editTask={this.editTask}/>
<ul>
{
this.state.tasks.map((task,index) =>{
	return <ProfileName key={task.name} clickHandler={this.changeStatus} index={index} detail={task} deleteTask={this.deleteTask}  />
})		
}
</ul>
</section>
);
}
}

var ContactUs=React.createClass({
handleClick(e){
var rabin=e.target.value;
	console.log("rabin");	
console.log(rabin);
},

getname(){
  return "rabindra singh";
},
render:function(){
return(
<div className="container-fluid">
	<div className="row-fluid" >
		<div className="col-md-offset-4 col-md-4" id="box">
			<h2>Contact Us!</h2>
			<h5>{this.getname()}</h5>
			<Profile />
			<hr />
		<form className="form-horizontal" action=" " method="" id="contact_form">
			<fieldset>
		<div className="form-group">
		<div className="col-md-12">
		<div className="input-group">
		<span className="input-group-addon"><i className="icon-admin"></i></span>
		<input name="first_name" placeholder="Name" className="form-control" type="text"  onChange={this.handleClick} />
		</div>
		</div>
		</div>
		<div className="form-group">
			<div className="col-md-12">
				<div className="input-group">
				<span className="input-group-addon"><i className="icon-envelope"></i></span>
				<input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
				</div>
			</div>
		</div>
		<div className="form-group">
			<div className="col-md-12">
				<div className="input-group">
				<span className="input-group-addon"><i className="icon-handphone"></i></span>
				<input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
				</div>
			</div>
		</div>
		<div className="form-group">
			<div className="col-md-12">
				<div className="input-group">
				<span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
				<input className="btn btn-success" type="submit" value="Submit" />
				</div>
			</div>
		</div>
		</fieldset>
		</form>
	</div>
	</div> 

<div className="clearfix"></div>	
</div>
);
}	
});

module.exports=ContactUs;
