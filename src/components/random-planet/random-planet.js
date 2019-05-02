import React, { Component } from 'react';

import SwapiService from '../../services/swapi';
import Spinner from '../spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true
	};

	constructor() {
		super();
		this.planetId = Math.floor(Math.random() * 18) + 2;
		this.updatePlanet(this.planetId);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false
		});
	}

	updatePlanet(id) {
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded);
	}

	getSpinner() {
		return (
			<div className="random-planet jumbotron rounded">
				<Spinner />
			</div>
		);
	}

	render() {
		const {
			planet: {
				id,
				name,
				population,
				rotation_period: rotationPeriod,
				diameter
			},
			loading,
		} = this.state;

		return loading ? this.getSpinner() : (
			<div className="random-planet jumbotron rounded">
				<img className="planet-image"
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
					alt=""/>
				<div>
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Population</span>
							<span>{population}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Rotation Period</span>
							<span>{rotationPeriod}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Diameter</span>
							<span>{diameter}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
