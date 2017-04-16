import React from 'react';


class ProfileName extends React.Component{
constructor(props){
super(props);
this.editTask=this.editTask.bind(this);
this.updateTask=this.updateTask.bind(this);

this.state={
isEditing:false
}
}
editTask(index){
this.setState({
isEditing:!this.state.isEditing
})
}

updateTask(){

}

render(){
	return(

<section>
{
this.state.isEditing ? <form>
<input type="text" defaultValue={this.props.detail.name} />
<button onClick={()=>{
this.updateTask()
}}>Update Item</button>	
</form>:<li className={this.props.detail.completed ? 'complete':'uncomplete'} 
	onClick={()=>{this.props.clickHandler(this.props.index)}}>{this.props.detail.name}
		<button onClick={(evt)=>{
			evt.stopPropagation();
			this.props.deleteTask(this.props.index)
		}}> Delete</button>
	<button onClick={(evt)=>{

			this.editTask()
		}}> Edit</button>
	</li> 

}
</section>
);
}
}

export default ProfileName;
