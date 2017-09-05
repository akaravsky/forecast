import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData){
		console.log(cityData);
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp - 275.15);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		/*
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;*/
		const {lon, lat} = cityData.city.coord;

		//console.log(temps);

		return (
			<tr className="row" key={name}>
				{/*<td>{<GoogleMap lon={lon} lat={lat} />}</td>*/}
				<td style={{height:'200px', width: '250px'}}>{name}</td>
				<td style={{width: '25%'}}><Chart data={temps} color="orange" /></td>
				<td style={{width: '25%'}}><Chart data={pressure} color="green" /></td>
				<td style={{width: '25%'}}><Chart data={humidities} color="black" /></td>
			</tr>
			);
	}

	render() {
		return (
				<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature (C)</th>
							<th>Pressure (hPa)</th>
							<th>Humidity (%)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			);
	}
}

/*function mapStateToProps(state) {
	return {weather: state.weather};
}*/

function mapStateToProps({weather}) {
	return {weather};
}

export default connect (mapStateToProps)(WeatherList);