import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return <h1>Habit Tracker {this.props.total}</h1>;
	}
}

export default Navbar;
