import React, { Component } from 'react';
import EditWeather from './EditWeather';

class WeatherList extends Component {
	state = {
		selectedPlace: 'Göteborg'
	}
	selectPlace = placeName => {
		this.setState({ selectedPlace: placeName });
	}
	render() {
		const list = this.props.places.map(p => {
			if( this.state.selectedPlace === p.name ) {
				return (
					<EditWeather key={p.name} place={p}
						changeWeather={this.props.changeWeather} />
				)
			} else {
				return (
					<li key={p.name}
						onClick={event => this.selectPlace(p.name)}>
						{p.name}: {p.weather}
					</li>);
			}

		})
		return (
			<ul>
				{list}
			</ul>
		)
	}
}
export default WeatherList;
