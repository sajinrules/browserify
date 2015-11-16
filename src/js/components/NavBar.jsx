var React = require('react');
//var RaisedButton = require('material-ui/lib/raised-button');
const AppBar = require('material-ui/lib/app-bar');
const IconButton = require('material-ui/lib/icon-button');
const NavigationClose = require('material-ui/lib/svg-icons/navigation/close');
const IconMenu= require('material-ui/lib/menus/icon-menu');
const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
const Menu = require('material-ui/lib/menus/menu');
const MenuItem = require('material-ui/lib/menu/menu-item');
const MenuDivider = require('material-ui/lib/menus/menu-divider');
const LeftNav = require('material-ui/lib/left-nav');
const FontIcon = require('material-ui/lib/font-icon');

var AppComponent = React.createClass({
	render() {
		return (
				<AppBar  
					title="Title"
					iconElementLeft={<IconButton><NavigationClose /></IconButton>}
					iconElementRight={
						<IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
								<MenuItem index={1}>One</MenuItem>
								<MenuItem index={2}>Two</MenuItem>
								<MenuItem index={3}>Three</MenuItem>
						</IconMenu>
						
					}/>
		);
	},
});

module.exports = AppComponent;