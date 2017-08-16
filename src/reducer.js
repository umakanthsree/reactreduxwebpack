
import { List, Map } from 'immutable';
import $ from 'jquery';

const init = List([]);

export default function(todos = init, action){
	switch(action.type){
		case 'ADD_TODO':
			var msgf;
			/* $.ajax({
            	url: "http://localhost:8090/list",
            	dataType: 'json',
            	type:"GET",
            	async: false
        		}).done(function (msg) { 
        			console.log(msg);
        			msgf =msg;
        		});
        		console.log('after ajax');
			return todos.push(Map(msgf));*/
			console.log('todo', action.payload);
			console.log('todo', todos);
			return todos.push(Map(action.payload));
		case 'TOGGLE_TODO':
			return todos.map(t => {
				if(t.get('id') == action.payload){
					console.log(t);
					return t.update('isDone', isDone => !isDone);
				}else{
					return t;
				}
			});
		default: 
			return todos;
	}
}