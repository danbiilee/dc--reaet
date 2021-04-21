import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
	render() {
		const { habits, onIncrement, onDecrement, onDelete } = this.props;
		return (
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
		);
	}
}

export default Habits;
