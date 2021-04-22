import React, { memo } from 'react';

/* 
	💡 Changes! 
	1. Class -> Function Component
	2. PureComponent -> memo()
		- memo의 인자로 함수형 컴포넌트를 전달
*/
const AddForm = memo((props) => {
  console.log('addForm');

  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default AddForm;
