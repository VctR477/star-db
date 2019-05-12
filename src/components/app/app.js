import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi';
import PeoplePage from '../people-page';

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
				<PeoplePage />
			</div>
		);
	}

}
