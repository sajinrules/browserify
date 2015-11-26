var AppConstants 	= require('../constants/app-constants');
var AppDispatcher	= require('../dispatchers/app-dispatchers');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var AppStore = assign({},EventEmitter.prototype,{
	emitChange : function(){
		console.log("here");
		this.emit(CHANGE_EVENT)
	}
});

AppDispatcher.register(function(payload){
	console.log("payload:",payload);
	console.log("AppStore:",AppStore);
	AppStore.emit('LOGGED_IN',true);
	return true;
});

module.exports = AppStore;