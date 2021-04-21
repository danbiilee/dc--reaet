import React, { Component } from 'react';

class AddForm extends Component {
	render() {
		const { value, onChange, onAdd } = this.props;
		return (
			<div>
				<input value={value} onChange={onChange} />
				<button onClick={onAdd}>Add</button>
			</div>
		);
	}
}

export default AddForm;
