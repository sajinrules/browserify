var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(),{
	handleLoginAction :function(action){
		console.log("action:",action);
		this.dispatch({
			source : 'LOGIN_ACTION',
			action : action
		})
	}
})

module.exports = AppDispatcher;