export default class SwapiService {

	_apiBaseUrl = 'https://swapi.co/api';

	getResource = async (url) => {
		const res = await fetch(this._apiBaseUrl + url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`)
		}

		const body = await res.json();
		return body;
	}

	getAllPeople = async () => {
		const res = await this.getResource('/people/');
		return res.results.map(person => this._transformPerson(person));
	}

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}`);
		return this._transformPerson(person);
	}

	getAllPlanets = async () => {
		const res = await this.getResource('/planets/');
		return res.results.map(planet => this._transformPlanet(planet));
	}

	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}`);
		return this._transformPlanet(planet);
	}

	getAllStarships = async () => {
		const res = await this.getResource('/starships/');
		return res.results.map(starship => this._transformStartship(starship));
	}

	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}`);
		return this._transformStartship(starship);
	}

	_extractId = (object) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return object.url.match(idRegExp)[ 1 ];
	}

	_transformPlanet = (planet) => {
		const {
			name,
			population,
			rotation_period: rotationPeriod,
			diameter
		} = planet;

		return {
			id: this._extractId(planet),
			name,
			population,
			rotationPeriod,
			diameter
		}
	}

	_transformStartship = (starship) => {
		const {
			name,
			model,
			manufacturer,
			costInCredits,
			length,
			passengers,
			cargoCapacity
		} = starship;

		return {
			id: this._extractId(starship),
			name,
			model,
			manufacturer,
			costInCredits,
			length,
			passengers,
			cargoCapacity,
		};
	}

	_transformPerson = (person) => {
		const {
			name,
			gender,
			birth_year: birthYear,
			eye_color: eyeColor,
		} = person;

		return {
			id: this._extractId(person),
			name,
			gender,
			birthYear,
			eyeColor,
		};
	}
}
