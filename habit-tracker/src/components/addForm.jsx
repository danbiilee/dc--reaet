import React, { Component } from 'react';

class AddForm extends Component {
	// ⚡ createRef: 리액트에서 DOM 요소 접근하기
	// input 요소가 렌더링되면, inputRef와 연결됨
	formRef = React.createRef();
	inputRef = React.createRef();

	onSubmit = (event) => {
		event.preventDefault(); // form이 제출이 되면 발생하는 refresh(기본 기능)를 중지
		const name = this.inputRef.current.value; // ⚡ current로 연결된 요소 접근 가능
		name && this.props.onAdd(name);
		// this.inputRef.current.value = '';
		this.formRef.current.reset();
	};

	render() {
		const { value, onChange, onAdd } = this.props;
		return (
			<form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
				<input
					type="text"
					className="add-input"
					placeholder="Habit"
					ref={this.inputRef}
					value={value}
					onChange={onChange}
				/>
				<button className="add-button">Add</button>
			</form>
		);
	}
}

export default AddForm;
