import React from 'react';
import style from './main.css'

export function Todo(props){
	const {todo} = props;
	
	if(todo.isDone){
		return <strike className="inactive">{todo.text}</strike>;
	}else{
		return <span className="active">{todo.text}</span>;
	}
}

export function TodoList(props){
	const {addTodo, toggleTodo} = props;

	console.log('props',props);
	//console.log('todos',todos.reducer.toJS());
	const todos = props.todos.reducer; //after routing 
	const onSubmit = (event) => {
		console.log('in submit');
		 const input = event.target;
	    const text = input.value;
	    const isEnterKey = (event.which == 13);
	    const isLongEnough = text.length > 0;

	      console.log('in submit', addTodo);
	      addTodo(text);
	      input.value = '';
	}
//	const toggleClick = (id) => toggleTodo(id);
	const toggleClick = id => event => toggleTodo(id);
	console.log('style', style);
	
	return(
		<div className="todo">
			<input type='text' placeholder="Add Todo" onBlur={onSubmit}/>
			<ul className="todoList">
				{todos.map && todos.map(t => {
					return (
						<li className="todoItem" key={t.get('id')} onClick={toggleClick(t.get('id'))}>
							<Todo todo={t.toJS()} />
						</li>)
				})}	
			</ul>
		</div>
	);
}