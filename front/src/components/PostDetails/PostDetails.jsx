import React from 'react';

const PostDetails = props => {
	return (
		<div>
			<h1>Post Details</h1>
			<div>Id: {props.match.params.postId}</div>
		</div>
	);
};

export { PostDetails };
