var React = require('react');
const TextField = require('material-ui/lib/text-field');
const FlatButton = require('material-ui/lib/flat-button');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-stores');
var AppConstants 	= require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var Router = require('react-router').Router
var Route = require('react-router').Route

var LoginComponent = React.createClass({
	getInitialState: function() {
		return {
			password:'',
			email: '',
			emailErrorText:'',
			passErrorText:''
		};
		/*loginForm:{
				email:'',
				Password: ''
			}*/
	},
	componentDidMount: function () {
       //var emitter = new EventEmitter();
		console.log("AppStore:",AppStore);
		console.log("this:",this);
		AppStore.on('LOGGED_IN',function(data){
			console.log("LOGGED_IN:",data);	
			console.log("Router:",Router.transitionTo);
			console.log("Route:",Route.transitionTo);
		})
    },
	onChange: function(field,e) {
		/*console.log("e:",e)
		console.log("e:",e.target.value);
		console.log("this:",this);
		console.log("field:",field);*/
		var nextState = {}
    	nextState[field] = e.target.value
    	this.setState(nextState)
    	this.validation(field,e.target.value)
	},
	validation:function(field,value){
		
    	if(field==='email'){
    		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    		//console.log("here");
    		if(!value){
    			this.setState({emailErrorText:"this field is required"});
    		}
    		else if(!re.test(value)){
    			this.state.emailErrorText=" not a valid email"
    		}else{
    			this.setState({emailErrorText:''});
    		}
    	}
	},
	onSubmit : function(e){
		e.preventDefault();
		//console.log("onSubmit:",this.state);
		var data = {
			email 		: this.state.email,
			password 	: this.state.password
		}
		//console.log("AppActions:",AppActions);
		AppActions.login(data);
	},
	render () {
		return (
			<div className="center">
				<h2>Login</h2>
				<form onSubmit={this.onSubmit}>
					<div>
						<TextField
							floatingLabelText="Email" ref="email" onChange={this.onChange.bind(this,'email')} value={this.state.email} errorText={this.state.emailErrorText}/>
					</div>
					<div>
						<TextField type="password"
							floatingLabelText="Password" ref="password" onChange={this.onChange.bind(this,'password')} value={this.state.password} errorText={this.state.passErrorText} />
							
					</div>
					<div>
						<FlatButton type="submit" label="Login" primary={true} />
					</div>
				</form>
				
				
			</div>
		);
	}
});

module.exports = LoginComponent;