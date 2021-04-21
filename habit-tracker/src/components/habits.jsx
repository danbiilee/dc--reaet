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
