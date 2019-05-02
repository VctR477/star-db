import React, { Component } from 'react';

import SwapiService from '../../services/swapi';
import Spinner from '../spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {}
	};

	constructor() {
		super();
		this.planetId = Math.floor(Math.random() * 18) + 2;
		this.updatePlanet(this.planetId);
	}

	onPlanetLoaded = (planet) => {
		this.setState({ planet });
	};

	updatePlanet(id) {
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded);
	}

	render() {
		const {
			planet: {
				id,
				name,
				population,
				rotation_period: rotationPeriod,
				diameter
			}
		} = this.state;

		return (
			<div className="random-planet jumbotron rounded">
				<Spinner />
			</div>

		);

		return (
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
