import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner';
import ItemInfo from './item-info';

export default class ItemDetails extends Component {

	state = {
		item: null
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		const { itemId, getData } = this.props;
		if (!itemId) {
			return;
		}

		this.setState({ item: null })

		getData(itemId)
			.then((item) => {
				this.setState({ item })
			})
	}

	render() {
		const { item } = this.state;
		const { type } = this.props;

		return (
			<div className="person-details card">
				{item ? <ItemInfo info={item} type={type} /> : <Spinner />}
			</div>
		)
	}
}
