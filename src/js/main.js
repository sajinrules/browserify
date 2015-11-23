var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/NavBar.jsx');
var Login = require('./components/Login.jsx');
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
var IndexRoute =  require('react-router').IndexRoute
injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
	(
		<Router>
			<Route path="/" component={NavBar}>
			<IndexRoute component={Login} />
				
			</Route>
			
		</Router>
	), document.getElementById('main'));