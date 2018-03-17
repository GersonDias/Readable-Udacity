import React from 'react';
import { Switch, Route } from 'react-router';

import Posts from '../Posts';
import Categories from '../Categories';
import PostDetails from '../PostDetails';

const Main = () => {
	return (
		<Switch>
			<Route exact path="/" component={Posts} />
			<Route exact path="/:categories" component={Categories} />
			<Route path="/:categories/:postId" component={PostDetails} />
		</Switch>
	);
};

export { Main };
