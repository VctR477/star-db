import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi';
import PageRow from '../page-row';

import './app.css';

export default class App extends Component {
	swapiService = new SwapiService();

	state = {
		selectedItemId: 5,
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedItemId: id
		});
	}

	render() {

		return (
			<div className="stardb-app">
				<Header />
				<RandomPlanet />
				<PageRow
					type='characters'
					getLeftData={this.swapiService.getAllPeople}
					getRightData={this.swapiService.getPerson}
					renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}/>
				<PageRow
					type='planets'
					getLeftData={this.swapiService.getAllPlanets}
					getRightData={this.swapiService.getPlanet}
					renderItem={(item) => `${item.name} (population: ${item.population}, diameter: ${item.diameter})`} />
				<PageRow
					type='starships'
					getLeftData={this.swapiService.getAllStarships}
					getRightData={this.swapiService.getStarship}
					renderItem={(item) => `${item.name} (passengers: ${item.passengers}, length: ${item.length})`}/>
			</div>
		);
	}

}
