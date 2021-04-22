import React, { PureComponent } from 'react';

/* 
	⚡ Component -> PureComponent
	- 이 컴포넌트는 props만 가지고 있으므로 props가 변경되지 않으면 리렌더 되지 않음

	⚠ 업데이트 안되는 현상
	- props의 콜백함수들은 App 클래스가 처음 만들어질 때 할당된 뒤로 다시는 업데이트 되지 않는 멤버변수
	- props.habit은 count 값만 변하고 해당 오브젝트의 참조값은 변하지 않음
		-> 핸들링 함수 내부에서 [...this.state.habits] 을 통해 새로운 배열을 생성하고 state를 업데이트 하지만, 
				habits 배열의 껍데기만 새로운 껍데기로 바뀌는 것이지 각 요소들 habit 오브젝트의 참조값은 그대로임
		-> PureComponent의 componentShouldUpdate() 는 얕은 비교만 하기 때문에 count 값이 변해도 데이터가 변경되지 않았다고 판단하여
				리턴값이 false가 되어 리렌더 되지 않는 것! 

	💡 성능 해결방법
	1. count 값을 분리해서 props로 전달한다. 
		-> 그럼 habit 오브젝트의 프로퍼티가 아니라 원시 데이터 그 자체로 넘어오기 때문
*/
class Habit extends PureComponent {
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
		const { name } = this.props.habit;
		const { count } = this.props; // 💡 성능 해결방법 1.

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
