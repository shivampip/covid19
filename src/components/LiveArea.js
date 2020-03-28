import React, { PureComponent } from 'react';
import moment from 'moment';
import datahub from '../api/datahub';
import './LiveArea.css';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

let data = [];

export default class LiveArea extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';
	state = {
		countries: [],
		selectedC: 'India',
		rdata: [],
		data: null,
		totalConfiremd: 0,
		totalDeath: 0,
		wdata: [],
		wtc: 0,
		wtd: 0
	};

	async componentDidMount() {
		await this.getData();
		await this.renderGraph(this.state.selectedC);
	}

	getData = async () => {
		console.log('Fetching Data');
		let response = await datahub.get(
			'countries-aggregated_json/data/14fece7bbf912fcd8e0fbe6ba2af9873/countries-aggregated_json.json'
		);
		let rdata = response.data;
		var countries = rdata.reduce(function(a, d) {
			if (a.indexOf(d.Country) === -1) {
				a.push(d.Country);
			}
			return a;
		}, []);

		// worldwide
		response = await datahub.get(
			'worldwide-aggregated_json/data/017c259c1d8ed879992e09f43faeefa5/worldwide-aggregated_json.json'
		);
		console.log('Worldwide');
		let wdata = response.data;
		console.log(wdata);

		let wtc = wdata[wdata.length - 1] ? wdata[wdata.length - 1].Confirmed : 0;
		let wtd = wdata[wdata.length - 1] ? wdata[wdata.length - 1].Deaths : 0;

		this.setState({ countries: countries, rdata: rdata, wdata: wdata, wtc: wtc, wtd: wtd });
	};

	renderGraph = (country) => {
		console.log('Rendering Graph');
		data = this.state.rdata.filter((d) => d.Country === country);
		data = data.filter((d) => d.Deaths > 0);
		console.log('Country data');
		console.log(data);
		// this.state.data= data;
		console.log('Total confirmed');
		let tc = data[data.length - 1] ? data[data.length - 1].Confirmed : 0;
		let td = data[data.length - 1] ? data[data.length - 1].Deaths : 0;
		console.log(tc);
		this.setState({ selectedC: country, data: data, totalConfiremd: tc, totalDeath: td });
	};

	renderCountries = () => {
		return this.state.countries.map((country) => {
			return (
				<option key={country} value={country}>
					{country}
				</option>
			);
		});
	};

	render() {
		console.log('RENDERING');
		if (this.state.data === null) {
			this.renderGraph(this.state.selectedC);
		}
		return (
			<div>
				<select
					value={this.state.selectedC}
					onChange={(eve) => {
						console.log(eve.target.value);
						this.renderGraph(eve.target.value);
					}}
				>
					{this.renderCountries()}
				</select>

				{/* <h2>{this.state.selectedC}</h2> */}
				<h3>Total Confirmed Cases: {this.state.totalConfiremd}</h3>
				<h3>Total Deaths: {this.state.totalDeath}</h3>
				<AreaChart
					width={window.innerWidth - 50}
					height={500}
					data={this.state.data}
					margin={{
						top: 10,
						right: 10,
						left: 10,
						bottom: 0
					}}
				>
					<CartesianGrid strokeDasharray="2 2" />
					<XAxis dataKey="Date" tickFormatter={(timeStr) => moment(timeStr).format('YYYY-MM-DD')} />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="Deaths" stackId="1" stroke="#3ac798" fill="#ff0026" />
					<Area type="monotone" dataKey="Confirmed" stackId="1" stroke="#3ac798" fill="#3ac798" />
				</AreaChart>
				<h2>Worldwide</h2>
				<h3>Total Confirmed Cases: {this.state.wtc}</h3>
				<h3>Total Deaths: {this.state.wtd}</h3>
				<AreaChart
					width={window.innerWidth - 50}
					height={500}
					data={this.state.wdata}
					margin={{
						top: 10,
						right: 10,
						left: 10,
						bottom: 0
					}}
				>
					<CartesianGrid strokeDasharray="2 2" />
					<XAxis dataKey="Date" tickFormatter={(timeStr) => moment(timeStr).format('YYYY-MM-DD')} />
					<YAxis />
					<Tooltip />
					<Area type="monotone" dataKey="Deaths" stackId="1" stroke="#3ac798" fill="#ff0026" />
					<Area type="monotone" dataKey="Confirmed" stackId="1" stroke="#3ac798" fill="#3ac798" />
				</AreaChart>
			</div>
		);
	}
}
