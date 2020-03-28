import React from 'react';
import LiveArea from './LiveArea';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="container">
					<h1 id="title">COVID-19 Live Update</h1>
					<LiveArea />
					<p id="credit">
						Data source <a href="https://datahub.io/">DataHub</a>
					</p>
				</div>
			</div>
		);
	}
}

export default App;
