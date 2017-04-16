import React from 'react';


const TodoForm =(props) =>{
	return(

	<form onSubmit={props.addTask}>
	<input type="text" value={props.currentTask} onChange={props.updatetask} />
		<input type="submit" value="submit" />
		</form>
);
}

export default TodoForm;
