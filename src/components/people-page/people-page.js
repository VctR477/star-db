import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from '../../services/swapi';


const Row = ({ left, right }) => {
	return (
		<div className="row mb2">
			<div className="col-md-6">
				{ left }
			</div>
			<div className="col-md-6">
				{ right }
			</div>
		</div>
	)
}

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: 3,
		hasError: false
	};

	componentDidCatch(error, info) {

		this.setState({
			hasError: true
		});
	}

	onPersonSelected = (selectedPerson) => {
		this.setState({ selectedPerson });
	};

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
				renderItem={(item) => `${item.name} (${item.gender}, ${item.birthYear})`}/>
		);

		const itemDetails = (
			<ItemDetails
				itemId={this.state.selectedPerson}
				getData={this.swapiService.getPerson}/>
		);

		return (
			<Row left={itemList} right={itemDetails}/>
		);
	}
}
