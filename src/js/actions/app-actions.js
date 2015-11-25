var AppConstants 	= require('../constants/app-constants');
var AppDispatchers 	= require('../dispatchers/app-dispatchers');

var AppActions = {
	login : function(data){
		console.log("data:",data);
		AppDispatchers.handleLoginAction({
			actionType : AppConstants.VIEW_ACTION,
			data       : data
		})
	}
}

module.exports = AppActions;