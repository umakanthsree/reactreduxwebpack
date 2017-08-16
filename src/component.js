import React from 'react';

export function Todo(props){
	const {todo} = props;
	
	if(todo.isDone){
		return <strike>{todo.text}</strike>;
	}else{
		return <span>{todo.text}</span>;
	}
}

export function TodoList(props){
	const {todos, addTodo, toggleTodo} = props;

	console.log('props',props);
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

	return(
		<div className="todo">
			<input type='text' placeholder="Add Todo" onBlur={onSubmit}/>
			<ul>
				{todos.map && todos.map(t => {
					return (
						<li className="todo_item" key={t.get('id')} onClick={toggleClick(t.get('id'))}>
							<Todo todo={t.toJS()} />
						</li>)
				})}	
			</ul>
		</div>
	);
}