import React from 'react';
import { connect } from 'react-redux';

class posts extends React.Component {
	static propTypes = {};

	render = () => <div>posts</div>;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(posts);
