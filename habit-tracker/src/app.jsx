import React, { Component } from 'react';
import './app.css';
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
		// 💡 성능 해결방법 2.
		const habits = this.state.habits.map((item) =>
			item.id === habit.id ? { ...item, count: item.count + 1 } : item
		);
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				const count = item.count - 1;
				return { ...item, count: count < 0 ? 0 : count };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((hb) => hb.id !== habit.id);
		this.setState({ habits });
	};

	handleAdd = (name) => {
		const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
		this.setState({ habits });
	};

	handleReset = () => {
		// 👍 이미 count 값이 0인 오브젝트는 업데이트 할 필요 없음
		const habits = this.state.habits.map((habit) =>
			habit.count > 0 ? { ...habit, count: 0 } : habit
		);
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
					onReset={this.handleReset}
				/>
			</>
		);
	}
}

export default App;
