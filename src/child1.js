import React from 'react';
import { Link } from 'react-router';
import { About } from './aboutComponent';

export function ChildPath(props){
	return(
		<div>
			<h1>Child Path 1</h1>
			<p>Decription of child path</p>
			<span><Link to="/about">About</Link></span>
			{props.children}
		</div>
	 )
}
