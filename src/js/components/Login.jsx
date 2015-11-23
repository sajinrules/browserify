var React = require('react');
const TextField = require('material-ui/lib/text-field');
var LoginComponent = React.createClass({
	render () {
		return (
			<section>
				<TextField
					hintText="Hint Text"
					floatingLabelText="Floating Label Text" />
				
			</section>
		);
	}
});

module.exports = LoginComponent;