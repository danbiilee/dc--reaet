/* 
	⚡ 성능 개선: state나 props에 변화가 없다면 render 함수를 호출하지 않음 
	- Component -> PureComponent
	- 이 컴포넌트는 onAdd 라는 콜백함수를 props로 가지는데, 
		onAdd는 App 클래스가 처음 만들어질 때 할당된 뒤로 다시는 업데이트 되지 않는 멤버변수!
		-> 리렌더 될 일이 없다! 
*/
import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
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
		const { value, onChange } = this.props;
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
