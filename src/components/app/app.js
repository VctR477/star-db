import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi';

import './app.css';

export default class App extends Component {
	swapiService = new SwapiService();

	state = {
		selectedPerson: 5,
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {
		console.log(this.swapiService.getAllPeople);

		return (
			<div className="stardb-app">
				<Header />
				<RandomPlanet />
	
				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllPeople}/>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={this.state.selectedPerson}/>
					</div>
				</div>
			</div>
		);
	}

}
