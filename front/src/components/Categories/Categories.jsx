import React from 'react';

const Categories = props => {
	return <div>Categorie: {props.match.params.categories}</div>;
};

export { Categories };
