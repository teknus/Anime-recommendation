import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Suggestions } from './pages/Suggestions';
import { Customer } from './pages/Customer';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Customer} />
			<Route exact path="/foryou" component={Suggestions} />
			<Route path="*" component={() => <h1>Page not found</h1>} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
