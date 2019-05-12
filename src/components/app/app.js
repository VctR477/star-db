import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi';

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
	
				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllPeople}
							renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}/>
					</div>
					<div className="col-md-6">
						<ItemDetails
							itemId={this.state.selectedItemId}
							getData={this.swapiService.getPerson}/>
					</div>
				</div>
			</div>
		);
	}

}
