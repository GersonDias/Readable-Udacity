import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/animals">Categories</Link>
			</li>
			<li>
				<Link to="/animals/2">Post Details</Link>
			</li>
		</ul>
	);
};

export default Header;
