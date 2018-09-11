import React from 'react';

const EditWeather = props => {
	let handleChange = event => {
		let newWeather = event.target.value;
		props.changeWeather(props.place.name, newWeather);
	}
	return (
		<li key={props.place.name}>{props.place.name}:
			<input
				type="text"
				value={props.place.weather}
				onChange={handleChange} />
		</li>
	)
}
//function EditWeather(props) {}
export default EditWeather;
