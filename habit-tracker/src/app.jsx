import React, { Component } from 'react';
import './app.css';
import AddForm from './components/addForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
	// state 이동, navbar, input, reset버튼 추가
	state = {
		habits: [
			{ id: 1, name: 'Reading', count: 0 },
			{ id: 2, name: 'Running', count: 0 },
			{ id: 3, name: 'Coding', count: 0 },
		],
		formText: '',
	};

	handleIncrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		habits[index].count++;
		this.setState({ ...this.state, habits });
	};

	handleDecrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		const count = --habits[index].count;
		habits[index].count = count < 0 ? 0 : count; // 💩
		this.setState({ ...this.state, habits });
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((hb) => hb.id !== habit.id);
		this.setState({ ...this.state, habits });
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			return { ...habit, count: 0 };
		});
		this.setState({ ...this.state, habits });
	};

	handleChange = (event) => {
		this.setState({
			...this.state,
			formText: event.target.value,
		});
	};

	handleAddHabit = () => {
		let index = this.state.habits.reduce((acc, cur) =>
			Math.max(acc.id, cur.id)
		);
		console.log(`Max index ${index}`);
		const habits = this.state.habits.concat({
			id: index++,
			name: this.state.formText,
			count: 0,
		});
		this.setState({ ...this.state, habits, formText: '' });
	};

	render() {
		return (
			<>
				<Navbar
					total={this.state.habits.filter((habit) => habit.count > 0).length}
				/>
				<AddForm
					value={this.state.formText}
					onChange={this.handleChange}
					onAdd={this.handleAddHabit}
				/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
				/>
				<button onClick={this.handleReset}>Reset All</button>
			</>
		);
	}
}

export default App;
