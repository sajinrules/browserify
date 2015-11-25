var AppConstants 	= require('../constants/app-constants');
var AppDispatcher	= require('../dispatchers/app-dispatchers');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var AppStore = assign({},EventEmitter.prototype,{
	emitChange : function(){
		this.emit(CHANGE_EVENT)
	}
});

AppDispatcher.register(function(payload){
	console.log("payload:",payload);
	return true;
});

module.exports = AppStore;