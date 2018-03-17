import React from 'react';
import { Link } from 'react-router-dom';

import { getAllCategories } from '../../services/ReadableAPI';
class Categories extends React.Component {
	state = {
		categories: [],
	};

	componentDidMount() {
		getAllCategories().then(data => this.setState({ categories: data }));
	}

	render() {
		return (
			<div>
				<h1>Categories</h1>
				<ul>
					{this.state.categories.map(category => {
						return (
							<li key={category.path}>
								<Link to={`/${category.path}`}>{category.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export { Categories };
