import React, { Component } from 'react';
import Habit from './habit';
import AddForm from './addForm';

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
							count={habit.count} // 💡 성능 해결방법 1.
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
