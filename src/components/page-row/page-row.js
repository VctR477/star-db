import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './page-row.css';


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

export default class PageRow extends Component {

	state = {
		selectedItem: 3,
		hasError: false
	};

	componentDidCatch(error, info) {

		this.setState({
			hasError: true
		});
	}

	onItemSelected = (selectedItem) => {
		this.setState({ selectedItem });
	};

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const { getLeftData, getRightData, renderItem, type } = this.props;

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={getLeftData}
				renderItem={renderItem}/>
		);

		const itemDetails = (
			<ItemDetails
				type={type}
				itemId={this.state.selectedItem}
				getData={getRightData}/>
		);

		return (
			<Row left={itemList} right={itemDetails}/>
		);
	}
}
