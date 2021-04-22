import React, { useRef, useState, useCallback, useEffect } from 'react';

/* 
  클래스형 컴포넌트에서는 멤버 변수들은 처음 한 번 만들어지고 변경되지 않음
    -> state나 props가 변경되면 render 함수만 반복해서 호출됨
  ❗❗❗ 함수형 컴포넌트는 state, props가 변경되면 해당 함수의 코드 블럭 전체가 반복해서 업데이트 됨! 
    -> 지역 변수들도 매 번 재생성되고, 새롭게 값을 계산하게 됨!!! 
  ❗❓ 그럼에도 불구하고 useState를 통해 생성된 state가 값을 기억할 수 있는 이유는? 
    -> Hook을 통해 컴포넌트 내부에 생성된 state는 메모리에 따로 저장해놓기 때문!
    -> useRef도 처음 한 번만 레퍼런스를 만들고, 메모리에 저장해놓고 재사용함
*/
const SimpleHabit = (props) => {
  // ⚡ useState: 함수형 컴포넌트에서 state를 사용할 수 있게 도와주는 Hook
  // ⚡ useRef: 함수형 컴포넌트에서 createRef를 사용할 수 있게 도와주는 Hook
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  /* 
    (
      ❗ 만약 onClick되는 버튼이 자식 컴포넌트였다면, 
      부모 컴포넌트가 업데이트될 때마다 콜백함수도 새롭게 생성되어 다른 참조값을 props로 전달하기 때문에 
      성능 개선을 위해 자식 컴포넌트에서 memo를 사용해도 계속 업데이트 되는 사이드 이펙트 발생 
    )
    💡 콜백함수 재사용 하는 방법: useCallback() Hook 사용하기 
  */
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  /* 
    ⚡ useEffect
      - 컴포넌트가 처음 마운트될 때 + 업데이트될 때마다 호출되는 Hook
      - componentDidMount와 componentDidUpdate에서의 중복된 코드를 줄일 수 있는 장점이 있음
      - 두 번째 인자: 배열
        - 특정 값이 변경됐을 때만 호출될 수 있도록 정의할 수 있음 
        - 빈 배열을 전달하면 컴포넌트가 처음 마운트될 때만 호출됨 
  */
  useEffect(() => {
    console.log(`mounted & unpdated!: ${count}`);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
