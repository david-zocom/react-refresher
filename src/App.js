import React, { Component } from 'react';
import './App.css';
import WeatherList from './WeatherList';

// [ väderinformation ]
class App extends Component {
	state = {
		data: [
			{ name: 'Göteborg', weather: 'regn' },
			{ name: 'Stockholm', weather: 'hagel och snöstorm' },
			{ name: 'Borås', weather: 'sol' },
			{ name: 'Thailand', weather: 'monsun' }
		]
	}
	changeWeather = (name, weather) => {
		let newData = [...this.state.data];
		let index = newData.findIndex(p => p.name === name);
		newData[index].weather = weather;
		this.setState({ data: newData })
	}
	render() {
		return (
			<div>
				<h1>Välkommen till väderpanik.se</h1>
				Hur är vädret?
				<WeatherList
					places={this.state.data}
					changeWeather={this.changeWeather} />
			</div>
		);
	}
}

export default App;
