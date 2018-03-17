import React, { Component } from 'react';

import './App.css';
import { configureStore } from './store';

import Main from './components/Main';
import Header from './components/Header';

class App extends Component {
	store = configureStore();

	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
}

export default App;
