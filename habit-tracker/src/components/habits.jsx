import React, { Component } from 'react';
import Habit from './habit';
import AddForm from './addForm';

/* 
	💡 habit 데이터가 변경될 때마다 새로운 habits를 만들어서 업데이트하기 때문에
	결국은 Habit 컴포넌트가 변경될 때 Habits 컴포넌트도 함께 변경되는 건 피하기 어려움. 
	-> 이 컴포넌트가 PureComponent를 상속하는 건 불필요
*/
class Habits extends Component {
	render() {
		const {
			habits,
			onIncrement,
			onDecrement,
			onDelete,
			onAdd,
			onReset,
		} = this.props;
		return (
			<>
				<AddForm onAdd={onAdd} />
				<ul>
					{habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							onDelete={onDelete}
						/>
					))}
				</ul>
				<button className="habits-reset" onClick={onReset}>
					Reset All
				</button>
			</>
		);
	}
}

export default Habits;
