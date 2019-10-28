import React, { Component } from 'react';

const Row = ({ prop, value }) => {
	return (
		<li className="list-group-item">
			<span className="term">{ prop }:</span>
			<span>{ value }</span>
		</li>
	)
}

export default class ItemInfo extends Component {
	
	renderList = (data) => {
		return Object.keys(data).map((key, index) => {
			return (key === 'id' || key === 'name') ? null : (
				<Row
					prop={key}
					value={data[ key ]}
					key={index + data.id}/>
			);
		});
	}

	render() {

		const {
			type,
			info: {
				id,
				name,
			}
		} = this.props;

		const list = this.renderList(this.props.info);

		return (
			<React.Fragment>
				<img className="person-image"
					src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
					alt="character"/>
	
				<div className="card-body">
					<h4>{ name }</h4>
					<ul className="list-group list-group-flush">
						{list}
					</ul>
				</div>
			</React.Fragment>
		)
	}
}
