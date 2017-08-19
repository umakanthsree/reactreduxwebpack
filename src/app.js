import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {TodoList} from './container';

//general rreact redux
/*const store = createStore(reducer);
const dummyTodo = [
		{ id: 4, isDone: true,  text: 'components 1' },
		{ id: 1, isDone: true,  text: 'components 2' },
		{ id: 2, isDone: true,  text: 'components 3' },
		{ id: 3, isDone: false,  text: 'components 4' }
	];

ReactDOM.render(
	<Provider store={store} >
		<TodoList />
	</Provider>,
	document.getElementById('app')
);
*/

//for Routing mainly

import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { ChildPath } from './child1';
import { StyledComponentBtn } from './StyledComponentBtn';
import { About } from './aboutComponent';

const store = createStore(
	combineReducers({
		reducer,
		routing: routerReducer
		})
	);

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);
//history.listen(location => 	.track(location.pathname))

ReactDOM.render(
	<Provider store={store} >
		<Router history={hashHistory}>
			<Route path='/' component={TodoList} >
			</Route>
			<Route path='/child1' component={ChildPath} >
				<Route path='/about' component={About} />
			</Route>
			<Route path='/styleComp' component={StyledComponentBtn} >
			</Route>
			
		</Router>
	</Provider>
	,document.getElementById('app')
);
//general rendering with redux
/*class TodoApp extends React.Component {
  render() {
    return (
        <h2>Down and Dirty TodoApp built with React</h2>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('app'));*/