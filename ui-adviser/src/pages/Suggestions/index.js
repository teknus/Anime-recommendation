import React, { Component } from 'react';
import "./styles.css"
export class Suggestions extends Component {
	constructor(props){
		super(props);
		this.state = {suggestions:[]};
	}
	componentWillMount(){
	//await api response to customer call
	}
	render() {
		return (
			<div className="page">
			<div className="nav">
				<h2>Minhas sugestões</h2>
			</div>
			<div className = "gallery">
				<div className="suggestion">
					<p className="description">Puesto de tacos</p>
				</div>

				<div className="suggestion">
					<p className="description">Little pizza Emilio Portes Gil</p>
				</div>


				<div className="suggestion">
					<p className="description">Restaurant los Compadres</p>
				</div>


				<div className="suggestion">
					<p className="description">Taqueria EL amigo </p>
				</div>
			</div>
			</div>
		);
	}
}
