import React, { Component } from 'react';

class Habit extends Component {
	// 내부적으로 가지고 있는 state 없이 외부에서 전달받은 props를 보여주기만 하는 컴포넌트
	// -> 클릭 이벤트 발생 -> 내부적으로 데이터 처리하지 않고, props로 주어진 콜백함수만 호출
	handleIncrement = () => {
		this.props.onIncrement(this.props.habit);
	};

	handleDecrement = () => {
		this.props.onDecrement(this.props.habit);
	};

	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};

	render() {
		const { name, count } = this.props.habit;

		return (
			<li className="habit">
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>
				<button
					className="habit-button habit-increase"
					onClick={this.handleIncrement}
				>
					<i className="fas fa-plus-square"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={this.handleDecrement}
				>
					<i className="fas fa-minus-square"></i>
				</button>
				<button
					className="habit-button habit-delete"
					onClick={this.handleDelete}
				>
					<i className="fas fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;
