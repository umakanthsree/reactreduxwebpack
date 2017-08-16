import React from 'react';
import { Link } from 'react-router'

export function About(){
	return(
		<div>
			<h1>About</h1>
			<p>Decription of About path</p>
			<span><Link to="/child1">About</Link></span>
		</div>
	 )
}
