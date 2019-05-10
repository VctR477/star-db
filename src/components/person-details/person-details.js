import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi';
import Spinner from '../spinner';
import PersonInfo from './person-info';

export default class PersonDetails extends Component {

	swapiService = new SwapiService();

	state = {
		person: null
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId) {
			return;
		}

		this.setState({ person: null })

		this.swapiService
			.getPerson(personId)
			.then((person) => {
				this.setState({ person })
			})
	}

	render() {
		const { person } = this.state;

		return (
			<div className="person-details card">
				{person ? <PersonInfo person={person} /> : <Spinner />}
			</div>
		)
	}
}
