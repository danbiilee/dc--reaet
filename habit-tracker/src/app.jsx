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
	};

	handleIncrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		habits[index].count++;
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		const count = --habits[index].count;
		habits[index].count = count < 0 ? 0 : count; // 💩
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((hb) => hb.id !== habit.id);
		this.setState({ habits });
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			return { ...habit, count: 0 };
		});
		this.setState({ habits });
	};

	handleAdd = (name) => {
		const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
		this.setState({ habits });
	};

	render() {
		return (
			<>
				<Navbar
					total={this.state.habits.filter((habit) => habit.count > 0).length}
				/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
				/>
				<button onClick={this.handleReset}>Reset All</button>
			</>
		);
	}
}

export default App;
