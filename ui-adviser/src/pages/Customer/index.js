import React, { Component } from 'react';
import "./style.css"
export class Customer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			payment: false,
			drink_level: '',
			dress_preference: '',
			ambience: '',
			budget:'',
		};
	}

	handleData = (e) => {
		e.preventDefault();
		console.log(this.state);
		const { history } = this.props;
		history.push('/foryou');
		//API call
	}

	render() {
		return (
			<div className="Form">
				<h2>
					Olá sou hernandes, Poderia responder as perguntas abaixo pra que possa lhe indicar o restaurante que
					você está procurando mais não sabe ainda.
				</h2>
				<hr/>
				<div className="container">
					<div className="row">
						<div>
							<h3> Costuma ingerir bebidas alcoólicas ? </h3>
							<div>
								<label>
									<input
										type="radio"
										value="1"
										name="drinklevel"
										onChange={(e) => this.setState({ drink_level: e.target.value })}
									/>
									Não bebo.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="2"
										name="drinklevel"
										onChange={(e) => this.setState({ drink_level: e.target.value })}
									/>
									Bebo Socialmente.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="3"
										name="drinklevel"
										onChange={(e) => this.setState({ drink_level: e.target.value })}
									/>
									Bebo Casualmente.
								</label>
							</div>
						</div>
						<div>
							<h3> Como as pessoas devem estar vestidas no ambiente que você está procurando ? </h3>
							<div>
								<label>
									<input
										type="radio"
										value="none"
										name="dress"
										onChange={(e) => this.setState({ dress_preference: e.target.value })}
										checked={this.state.dress_preference === 'none'}
									/>
									sem preferência.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="informal"
										name="dress"
										onChange={(e) => this.setState({ dress_preference: e.target.value })}
										checked={this.state.dress_preference === 'informal'}
									/>
									informalmente.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="formal"
										name="dress"
										onChange={(e) => this.setState({ dress_preference: e.target.value })}
										checked={this.state.dress_preference === 'formal'}
									/>
									formalmente.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="elegant"
										name="dress"
										onChange={(e) => this.setState({ dress_preference: e.target.value })}
										checked={this.state.dress_preference === 'elegant'}
									/>
									Elegantemente.
								</label>
							</div>
						</div>
						<div>
							<h3> Qual sua compainha neste dia ? </h3>
							<div>
								<label>
									<input
										type="radio"
										value="familia"
										name="ambience"
										onChange={(e) => this.setState({ ambience: e.target.value })}
										checked={this.state.ambience === 'familia'}
									/>
									Familia.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="amigos"
										name="ambience"
										onChange={(e) => this.setState({ ambience: e.target.value })}
										checked={this.state.ambience === 'amigos'}
									/>
									Amigos.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="sozinho"
										name="ambience"
										onChange={(e) => this.setState({ ambience: e.target.value })}
										checked={this.state.ambience === 'sozinho'}
									/>
									Sem acompanhantes.
								</label>
							</div>
						</div>
						<div>
							<h3> Quanto você pretende gastar ? </h3>
							<div>
								<label>
									<input
										type="radio"
										value="low"
										name="budget"
										onChange={(e) => this.setState({ budget: e.target.value })}
										checked={this.state.budget === 'low'}
									/>
									Pouco.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="midium"
										name="budget"
										onChange={(e) => this.setState({ budget: e.target.value })}
										checked={this.state.budget === 'midium'}
									/>
									Mais ou menos.
								</label>
							</div>
							<div>
								<label>
									<input
										type="radio"
										value="high"
										name="budget"
										onChange={(e) => this.setState({ budget: e.target.value })}
										checked={this.state.budget === 'high'}
									/>
									Sem limites.
								</label>
							</div>
						</div>
						<div>
							<h3> Como pretende realizar o pagamento ?</h3>
							<div className="radioyes">
								<label>
									<input
										type="radio"
										value="cash"
										name="payment"
										onChange={(e) => this.setState({ payment: e.target.value })}
										checked={this.state.payment === 'cash'}
									/>
									Dinheiro
								</label>
							</div>
							<div className="radiono">
								<label>
									<input
										type="radio"
										value="credit"
										name="payment"
										onChange={(e) => this.setState({ payment: e.target.value })}
										checked={this.state.payment === 'credit'}
									/>
									Cartão de Crédito
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="submit">
				<button type="submit" onClick={this.handleData}>
						Ok
					</button>
				</div>
			</div>
		);
	}
}
